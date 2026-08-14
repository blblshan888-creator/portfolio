import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { extname, join } from "node:path";

const projectRoot = new URL("../", import.meta.url);
const clientRoot = new URL("../dist/client/", import.meta.url);
const workerEntry = new URL("../dist/server/index.js", import.meta.url);
const outputRoot = new URL("../edgeone-dist/", import.meta.url);

const routes = [
  "/",
  "/en",
  "/work/choice-ai",
  "/work/ai-video-evaluation",
  "/en/work/choice-ai",
  "/en/work/ai-video-evaluation",
];

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".m4v": "video/x-m4v",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".vtt": "text/vtt; charset=utf-8",
  ".webp": "image/webp",
};

function cleanStaticHtml(html) {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<link\b(?=[^>]*\brel=["']modulepreload["'])[^>]*>/gi, "")
    .replace(/<link\b(?=[^>]*\bas=["']script["'])[^>]*>/gi, "")
    .replace(/href=["']\/en["']/g, 'href="/en/"')
    .replace(/href=["']\/work\/choice-ai["']/g, 'href="/work/choice-ai/"')
    .replace(/href=["']\/work\/ai-video-evaluation["']/g, 'href="/work/ai-video-evaluation/"')
    .replace(/href=["']\/en\/work\/choice-ai["']/g, 'href="/en/work/choice-ai/"')
    .replace(/href=["']\/en\/work\/ai-video-evaluation["']/g, 'href="/en/work/ai-video-evaluation/"')
    .replace("</head>", '<meta name="edgeone-static" content="true"/></head>');
}

async function assetFetch(request) {
  const pathname = new URL(request.url).pathname.replace(/^\/+/, "");
  const fileUrl = new URL(pathname, clientRoot);

  try {
    const body = await readFile(fileUrl);
    return new Response(body, {
      status: 200,
      headers: {
        "content-type": contentTypes[extname(pathname)] ?? "application/octet-stream",
      },
    });
  } catch {
    return new Response("Not found", { status: 404 });
  }
}

await rm(outputRoot, { recursive: true, force: true });
await mkdir(outputRoot, { recursive: true });
await cp(clientRoot, outputRoot, { recursive: true });

const workerUrl = `${workerEntry.href}?static=${Date.now()}`;
const { default: worker } = await import(workerUrl);
const env = { ASSETS: { fetch: assetFetch } };
const context = {
  passThroughOnException() {},
  waitUntil() {},
};

for (const route of routes) {
  const response = await worker.fetch(
    new Request(`https://edgeone-static.local${route}`, {
      headers: { accept: "text/html" },
    }),
    env,
    context,
  );

  if (!response.ok) {
    throw new Error(`Failed to render ${route}: ${response.status}`);
  }

  const html = cleanStaticHtml(await response.text());
  const routeDir = route === "/" ? outputRoot : new URL(`.${route}/`, outputRoot);
  await mkdir(routeDir, { recursive: true });
  await writeFile(new URL("index.html", routeDir), html);
}

await writeFile(
  new URL("_redirects", outputRoot),
  [
    "/en /en/ 301",
    "/work/choice-ai /work/choice-ai/ 301",
    "/work/ai-video-evaluation /work/ai-video-evaluation/ 301",
    "/en/work/choice-ai /en/work/choice-ai/ 301",
    "/en/work/ai-video-evaluation /en/work/ai-video-evaluation/ 301",
    "",
  ].join("\n"),
);

console.log(`Static mirror generated at ${join(projectRoot.pathname, "edgeone-dist")}`);
