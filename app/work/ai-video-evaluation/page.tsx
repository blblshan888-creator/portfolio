import type { Metadata } from "next";
import LanguageSwitcher from "../../components/language-switcher";

export const metadata: Metadata = {
  title: "AI 视频模型评测与创作｜David 个人作品集",
  description: "6 个 AI 视频模型、7 项指标与多分镜内容创作实践。",
};

export default function AIVideoEvaluationPage() {
  return (
    <main className="case-page">
      <nav className="case-nav" aria-label="案例页导航">
        <a href="/">← 返回首页</a>
        <strong>DAVID · CASE 02</strong>
        <div className="case-nav-actions"><LanguageSwitcher current="zh" zhHref="/work/ai-video-evaluation" enHref="/en/work/ai-video-evaluation" /><a href="https://my.feishu.cn/wiki/WoAmwxwXpiXvmIk74rwceYNVncg?from=from_copylink" target="_blank" rel="noreferrer">完整飞书评测 ↗</a></div>
      </nav>

      <section className="case-hero">
        <div className="case-hero-grid case-hero-video">
          <div>
            <span className="case-label">6 MODELS × 7 METRICS</span>
            <h1>AI 视频模型<br />评测与创作</h1>
            <p className="case-lead">不只比较模型分数，更判断它们适合怎样的内容、创作者与 KOL 场景，并将评测结论应用到《龙之征服》的多分镜制作流程。</p>
            <div className="case-status">评测基于 2026 年 7 月对应模型版本、指定测试集与人工评分。结论反映当时版本表现，不代表长期固定排名。</div>
          </div>
          <div className="case-visual case-visual-dark case-video-player">
            <video
              controls
              preload="metadata"
              poster="/images/work/dragon-conquest-poster.jpg"
              aria-label="播放 AI 视频作品《龙之征服》"
            >
              <source src="/videos/dragon-conquest-web.m4v" type="video/x-m4v" />
              <track kind="captions" src="/videos/dragon-conquest-captions.vtt" srcLang="zh" label="中文说明" default />
              当前浏览器不支持视频播放。
            </video>
          </div>
        </div>
      </section>

      <section className="evaluation-summary" aria-labelledby="evaluation-summary-title">
        <div className="evaluation-summary-inner">
          <div className="evaluation-summary-heading">
            <span className="section-kicker">QUICK CONCLUSIONS</span>
            <h2 id="evaluation-summary-title">先看结论，<br />再决定是否深读。</h2>
            <p>以下为网页端摘要；完整评分矩阵、测试用例与逐项分析仍以飞书原文为准。</p>
          </div>
          <div className="conclusion-grid">
            <article><span>01 / 选模型</span><h3>没有单一“全能第一”</h3><p>模型选择应跟随镜头任务，而不是只看综合排名。写实、动作、角色一致性与长镜头控制需要分别判断。</p></article>
            <article><span>02 / 做内容</span><h3>稳定性比偶发惊艳更重要</h3><p>进入批量生产后，角色和风格一致性、可控程度以及返工成本，会直接决定内容是否可持续交付。</p></article>
            <article><span>03 / 配场景</span><h3>创作者需要组合式工作流</h3><p>先按脚本拆分镜头，再为不同镜头匹配模型，通过参考图、多轮筛选与剪辑完成最终叙事。</p></article>
          </div>
          <a className="evaluation-source" href="https://my.feishu.cn/wiki/WoAmwxwXpiXvmIk74rwceYNVncg?from=from_copylink" target="_blank" rel="noreferrer">
            <span>完整内容包含</span>
            <strong>6 个模型评分矩阵 · 7 项指标说明 · 测试方法与逐项结论</strong>
            <em>前往飞书原文 ↗</em>
          </a>
        </div>
      </section>

      <section className="case-body" aria-labelledby="evaluation-title">
        <div className="case-body-inner">
          <div className="case-body-heading">
            <h2 id="evaluation-title">从模型能力，<br />回到内容场景。</h2>
            <p>评测框架分为基础生成、镜头与叙事、生产可用性三层，覆盖画面质量、提示词遵循、角色一致性、运动表现、镜头控制、音画协同与综合可用性七项指标。</p>
          </div>
          <div className="model-grid">
            <article className="model-card"><span>LAYER 01</span><h3>基础生成能力</h3><p>观察画面完成度、细节稳定性、提示词遵循和常见生成瑕疵。</p></article>
            <article className="model-card"><span>LAYER 02</span><h3>镜头与叙事能力</h3><p>判断角色一致性、运动合理性、镜头调度和连续叙事能力。</p></article>
            <article className="model-card"><span>LAYER 03</span><h3>生产可用性</h3><p>结合生成效率、可控程度、筛选成本与创作者实际工作流评估。</p></article>
            <article className="model-card"><span>WORKFLOW 01</span><h3>脚本与分镜</h3><p>将成片拆成 20–30 个镜头，先明确叙事信息、景别与运动意图。</p></article>
            <article className="model-card"><span>WORKFLOW 02</span><h3>生成与筛选</h3><p>按镜头需求选择模型，通过参考图和多轮生成控制角色与视觉一致性。</p></article>
            <article className="model-card"><span>WORKFLOW 03</span><h3>剪辑与复盘</h3><p>完成素材筛选、节奏编辑和音画组合，并回看不同模型的实际生产成本。</p></article>
          </div>
        </div>
      </section>

      <footer className="case-outro">
        <h2>查看评测原文，或返回作品集。</h2>
        <div className="case-outro-actions"><a className="button button-secondary" href="/">返回首页</a><a className="button button-primary" href="https://my.feishu.cn/wiki/WoAmwxwXpiXvmIk74rwceYNVncg?from=from_copylink" target="_blank" rel="noreferrer">完整飞书评测 ↗</a></div>
      </footer>
    </main>
  );
}
