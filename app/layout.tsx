import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "David · 曹滨山｜AI 增长策略",
  description:
    "David 的个人作品集，聚焦 AI 增长策略、AI 内容与作者增长。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
