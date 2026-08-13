import type { Metadata } from "next";
import LanguageSwitcher from "./components/language-switcher";

export const metadata: Metadata = {
  title: "David · 曹滨山｜AI 内容与作者增长",
  description:
    "面向 AI 初创公司的个人作品集：内容供给、作者生态增长与 AI 产品实践。",
};

export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-header" aria-label="主要导航">
        <a className="brand" href="#top" aria-label="返回首页顶部">
          <span className="brand-mark" aria-hidden="true">
            D
          </span>
          <span className="brand-copy">
            <strong>DAVID · 曹滨山</strong>
            <small>AI GROWTH / SHANGHAI</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="首页内容导航">
          <a href="#capabilities">能力</a>
          <a href="#work">作品</a>
          <a href="#experience">经历</a>
          <a href="#aesthetic">审美</a>
        </nav>

        <div className="header-actions">
          <LanguageSwitcher current="zh" zhHref="/" enHref="/en" />
          <a className="header-contact" href="mailto:18602172142@163.com">联系我<span aria-hidden="true">↗</span></a>
        </div>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="eyebrow-row">
            <span className="eyebrow eyebrow-pink">AI 内容与作者增长</span>
          </div>

          <h1 id="hero-title">
            把 <span className="highlight">AI 能力</span>，
            <br />
            变成运营和增长结果。
          </h1>

          <p className="hero-intro">
            5+ 年内容增长、作者生态运营经验，经历字节跳动、B站，
            并持续通过 AI 产品、模型评测与 Vibe Coding 建立实践。
          </p>

          <div className="hero-actions" aria-label="首屏操作">
            <a className="button button-primary" href="#work">
              查看精选作品
              <span aria-hidden="true">→</span>
            </a>
            <a className="button button-secondary" href="mailto:18602172142@163.com">
              和我聊聊
            </a>
          </div>

          <div className="availability">
            <span className="availability-dot" aria-hidden="true" />
            <p>
              正在寻找 AI 初创公司的
              <strong>增长、内容与作者生态机会</strong>
            </p>
          </div>
        </div>

        <div className="hero-visual" aria-label="David 个人肖像区域">
          <div className="sticker sticker-top">AI × GROWTH</div>
          <div className="sticker sticker-side">CONTENT +</div>

          <div className="portrait-frame">
            <div className="dot-grid" />
            <div className="shape shape-circle" />
            <div className="shape shape-square" />
            <div className="shape shape-pill" />
            <div className="portrait-photo">
              <img
                src="/images/david-avatar-headshot.jpg"
                alt="David 戴眼镜和耳机的个人插画肖像"
                width="1000"
                height="1000"
                fetchPriority="high"
              />
            </div>
            <div className="frame-caption">
              <span>01</span>
              <span>DAVID / 2026</span>
            </div>
          </div>

          <div className="visual-note">
            <span aria-hidden="true">✦</span>
            让模型能力进入真实业务场景
          </div>
        </div>
      </section>

      <div className="hero-footer" aria-hidden="true">
        <span>STRATEGY</span>
        <i />
        <span>PRODUCT PRACTICE</span>
        <i />
        <span>CREATOR ECOSYSTEM</span>
        <strong>SCROLL ↓</strong>
      </div>

      <section className="page-section capabilities-section" id="capabilities" aria-labelledby="capabilities-title">
        <div className="section-heading split-heading">
          <div>
            <span className="section-kicker">WHAT I CAN DO / 02</span>
            <h2 id="capabilities-title">把内容与作者运营，<br />做成可复用的增长链路。</h2>
          </div>
          <p>从内容方向、作者识别到分层激励，再用 AI 工具提升判断与交付效率。</p>
        </div>

        <div className="capability-grid">
          <article className="capability-card capability-yellow">
            <span className="card-index">01</span>
            <div className="capability-icon" aria-hidden="true">◎</div>
            <h3>内容供给</h3>
            <p>判断内容方向、设计玩法，并将有效方法沉淀为可持续供给机制。</p>
            <ul>
              <li>内容方向与场景判断</li>
              <li>玩法设计与供给组织</li>
              <li>内容效果复盘</li>
            </ul>
          </article>
          <article className="capability-card capability-pink">
            <span className="card-index">02</span>
            <div className="capability-icon" aria-hidden="true">↗</div>
            <h3>作者增长</h3>
            <p>完成作者识别、引入、分层、激励、促活和留存的完整运营链路。</p>
            <ul>
              <li>作者画像与标准定义</li>
              <li>分层运营与激励</li>
              <li>私域承接与生命周期</li>
            </ul>
          </article>
          <article className="capability-card capability-mint">
            <span className="card-index">03</span>
            <div className="capability-icon" aria-hidden="true">✦</div>
            <h3>AI 赋能</h3>
            <p>将模型能力与工具能力用于内容生产、作者场景和运营产品化。</p>
            <ul>
              <li>模型能力与场景评测</li>
              <li>AI 内容创作流程</li>
              <li>Vibe Coding 实践</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="page-section work-section" id="work" aria-labelledby="work-title">
        <div className="section-heading split-heading">
          <div>
            <span className="section-kicker">SELECTED PRACTICE / 03</span>
            <h2 id="work-title">精选实践</h2>
          </div>
          <p>用真实项目证明：能拆需求、判断模型，也能完成可运行的产品与内容交付。</p>
        </div>

        <div className="work-grid">
          <a className="work-card work-card-choice" href="/work/choice-ai" aria-label="查看 Choice AI 案例">
            <div className="work-media">
              <img src="/images/work/choice-ai-home.png" alt="Choice AI 本地应用首页截图" loading="lazy" />
              <span className="work-badge">VIBE CODING</span>
            </div>
            <div className="work-copy">
              <span className="work-number">CASE 01</span>
              <h3>Choice AI<br />个人生活决策助手</h3>
              <p>从需求拆解、推荐规则、交互流程到本地 MVP，完成一次运营产品化实践。</p>
              <div className="work-tags"><span>需求拆解</span><span>规则设计</span><span>本地 MVP</span></div>
              <strong>查看案例 <span aria-hidden="true">↗</span></strong>
            </div>
          </a>

          <a className="work-card work-card-video" href="/work/ai-video-evaluation" aria-label="查看 AI 视频模型评测案例">
            <div className="work-copy">
              <span className="work-number">CASE 02</span>
              <h3>AI 视频模型<br />评测与创作</h3>
              <p>用统一框架评测 6 个模型、7 项指标，并完成多分镜 AI 成片创作。</p>
              <div className="work-tags"><span>模型判断</span><span>内容创作</span><span>KOL 场景</span></div>
              <strong>查看案例 <span aria-hidden="true">↗</span></strong>
            </div>
            <div className="work-media">
              <img src="/images/work/dragon-conquest-poster.jpg" alt="AI 视频龙之征服封面" loading="lazy" />
              <span className="work-badge">6 MODELS / 7 METRICS</span>
            </div>
          </a>
        </div>
      </section>

      <section className="proof-strip" aria-labelledby="proof-title">
        <div className="proof-inner">
          <div className="proof-intro">
            <span className="section-kicker">EVIDENCE / 04</span>
            <h2 id="proof-title">内容与作者增长，<br />最终要看真实结果。</h2>
          </div>
          <div className="proof-grid">
            <article><strong>2w+</strong><span>高潜达人</span><p>完成标准定义、圈选与规模化运营</p></article>
            <article><strong>500亿+</strong><span>玩法播放贡献</span><p>多项爆款玩法累计内容消费结果</p></article>
            <article><strong>1w+</strong><span>海外 KOL</span><p>覆盖引入、私域承接与促活留存</p></article>
            <article><strong>5+</strong><span>年运营经验</span><p>内容供给、作者生态与 AI 实践</p></article>
          </div>
        </div>
      </section>

      <section className="page-section experience-section" id="experience" aria-labelledby="experience-title">
        <div className="section-heading split-heading">
          <div>
            <span className="section-kicker">EXPERIENCE / 05</span>
            <h2 id="experience-title">围绕作者与内容，<br />持续搭建增长链路。</h2>
          </div>
          <p>经历不同阶段和市场，但核心问题始终一致：找到合适的作者，让好内容持续发生。</p>
        </div>

        <div className="timeline">
          <article className="timeline-item">
            <div className="timeline-meta"><span>2025.11—2026.01</span><strong>BILIBILI</strong></div>
            <div className="timeline-main"><h3>B 站 · 星计划作者策略</h3><p>定义 AIGC、美食、影视等品类高潜作者标准，推动规模化引入与质量管理。</p></div>
            <div className="timeline-result"><strong>3k+</strong><span>低粉潜力 UP 主</span><em>万粉孵化率提升 25%</em></div>
          </article>
          <article className="timeline-item">
            <div className="timeline-meta"><span>2025.02—2025.11</span><strong>DOUYIN</strong></div>
            <div className="timeline-main"><h3>抖音 · 玩法达人增长</h3><p>完成达人标准、分层、引入、激励和推热链路，推动优质玩法持续供给。</p></div>
            <div className="timeline-result"><strong>2w+</strong><span>高潜达人</span><em>500 亿+玩法播放贡献</em></div>
          </article>
          <article className="timeline-item">
            <div className="timeline-meta"><span>2023.07—2025.02</span><strong>KE SONG</strong></div>
            <div className="timeline-main"><h3>可颂 · 社区作者运营</h3><p>参与创新社区从 0 到 1，负责垂类作者引入、促活、社群承接和内容供给。</p></div>
            <div className="timeline-result"><strong>2k+</strong><span>优质原创作者</span><em>1w+ 可分发稿件</em></div>
          </article>
          <article className="timeline-item">
            <div className="timeline-meta"><span>2022.02—2023.02</span><strong>BILIBILI SEA</strong></div>
            <div className="timeline-main"><h3>B 站海外 · KOL 生态</h3><p>面向东南亚市场搭建 KOL 引入、私域承接、分层激励和促活留存机制。</p></div>
            <div className="timeline-result"><strong>1w+</strong><span>海外 KOL</span><em>贡献平台 14% 视频播放</em></div>
          </article>
        </div>
      </section>

      <section className="page-section social-section" aria-labelledby="social-title">
        <div className="section-heading split-heading">
          <div>
            <span className="section-kicker">AI CONTENT & SOCIAL / 06</span>
            <h2 id="social-title">持续输出，也持续连接。</h2>
          </div>
          <p>公开记录 AI 学习与实践，也愿意与内容、作者和 AI 创业从业者交流。</p>
        </div>
        <div className="social-grid">
          <a className="social-card xhs-card" href="https://xhslink.cn/m/86L73Xp4D18" target="_blank" rel="noreferrer">
            <div className="social-sticker">可点击访问 ↗</div>
            <span className="social-platform">小红书 / REDNOTE</span>
            <h3>David在思考<br />（AI版）</h3>
            <p>记录 AI 工具、产品体验、模型观察和内容运营思考。</p>
            <div className="topic-cloud"><span>AI 工具</span><span>产品观察</span><span>内容运营</span><span>Vibe Coding</span></div>
          </a>
          <article className="social-card bonjour-card">
            <div className="bonjour-copy"><span className="social-platform">BONJOUR / COFFEE CHAT</span><h3>认识有过 AI 创业<br />与工作经历的朋友</h3><p>个人社交名片仅作展示，不提供账号链接或二维码。</p></div>
            <img src="/images/social/bonjour-card.jpg" alt="David 的 Bonjour Coffee Chat 隐私裁剪名片" loading="lazy" />
          </article>
        </div>
      </section>

      <section className="page-section aesthetic-section" id="aesthetic" aria-labelledby="aesthetic-title">
        <div className="section-heading split-heading">
          <div><span className="section-kicker">ABOUT AESTHETICS / 07</span><h2 id="aesthetic-title">关于审美<br /><span>摄影作品</span></h2></div>
          <p>摄影训练我观察关系、捕捉重点与组织画面；这些能力同样参与内容判断和选题表达。</p>
        </div>
        <div className="photo-grid">
          <figure><img src="/images/photography/01-snow-forest.jpg" alt="雪林与金色树木" loading="lazy" /><figcaption><span>01 / 自然</span>雪林与金色树木</figcaption></figure>
          <figure><img src="/images/photography/03-river-bridge.jpg" alt="紫红晚霞下的城市桥梁" loading="lazy" /><figcaption><span>03 / 城市</span>桥梁与紫红晚霞</figcaption></figure>
          <figure><img src="/images/photography/04-shanghai-skyline.jpg" alt="夕阳下的上海城市天际线" loading="lazy" /><figcaption><span>04 / 城市</span>上海城市天际线</figcaption></figure>
          <figure><img src="/images/photography/05-city-contrast.jpg" alt="传统建筑与玻璃幕墙" loading="lazy" /><figcaption><span>05 / 建筑</span>传统与现代并置</figcaption></figure>
          <figure><img src="/images/photography/06-balloons.jpg" alt="蓝天下的红白气球" loading="lazy" /><figcaption><span>06 / 日常</span>气球与蓝天</figcaption></figure>
          <figure><img src="/images/photography/08-city-street.jpg" alt="黑白城市街道与住宅" loading="lazy" /><figcaption><span>08 / 街景</span>城市街道秩序</figcaption></figure>
        </div>
      </section>

      <footer className="contact-footer" id="contact">
        <div className="footer-inner">
          <div><span className="section-kicker">LET’S TALK / 08</span><h2>如果你也在做AI，内容<br />或创作者生态，欢迎一起聊聊。</h2></div>
          <div className="contact-links">
            <a href="tel:18602172142"><span>PHONE</span><strong>186 0217 2142</strong><em>↗</em></a>
            <a href="mailto:18602172142@163.com"><span>EMAIL</span><strong>18602172142@163.com</strong><em>↗</em></a>
            <a href="https://xhslink.cn/m/86L73Xp4D18" target="_blank" rel="noreferrer"><span>REDNOTE</span><strong>David在思考（AI版）</strong><em>↗</em></a>
          </div>
        </div>
        <div className="footer-bottom footer-continuation"><span>未完待续...</span></div>
      </footer>
    </main>
  );
}
