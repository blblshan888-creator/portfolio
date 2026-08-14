/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from "next";
import LanguageSwitcher from "../../components/language-switcher";

export const metadata: Metadata = {
  title: "Choice AI｜David 个人作品集",
  description: "从需求拆解、规则设计到 Vibe Coding 的本地决策助手 MVP。",
};

export default function ChoiceAIPage() {
  return (
    <main className="case-page">
      <nav className="case-nav" aria-label="案例页导航">
        <a href="/">← 返回首页</a>
        <strong>DAVID · CASE 01</strong>
        <div className="case-nav-actions"><LanguageSwitcher current="zh" zhHref="/work/choice-ai" enHref="/en/work/choice-ai" /><a href="mailto:18602172142@163.com">联系我 ↗</a></div>
      </nav>

      <section className="case-hero">
        <div className="case-hero-grid">
          <div>
            <span className="case-label">OPERATIONS × PRODUCT × AI</span>
            <h1>Choice AI<br />个人生活决策助手</h1>
            <p className="case-lead">面对“选项很多、信息零散、越比较越纠结”的日常决策问题，我将运营判断转化为一套可以运行的需求结构、推荐规则和交互流程。</p>
            <div className="case-status">当前成果：完整本地 MVP 与试运行准备版本。尚未完成规模化真实用户验证，不虚构业务结果。</div>
          </div>
          <div className="case-visual">
            <img src="/images/work/choice-ai-home.png" alt="Choice AI 本地应用首页" />
            <span className="case-visual-note">一个结论优先 · 降低选择成本</span>
          </div>
        </div>
      </section>

      <section className="case-body" aria-labelledby="choice-process-title">
        <div className="case-body-inner">
          <div className="case-body-heading">
            <h2 id="choice-process-title">从运营问题，<br />走到可运行产品。</h2>
            <p>重点不在“做出一个页面”，而在于先定义决策信息、把模糊偏好转化为可计算条件，再通过规则排序输出一个明确建议。Vibe Coding 是交付手段，需求判断和规则设计才是产品成立的基础。</p>
          </div>
          <div className="case-step-grid">
            <article className="case-step"><span>01 / PROBLEM</span><h3>识别决策困难</h3><p>将用户纠结拆成选项、约束条件、偏好强度和风险接受度，避免收集无效信息。</p></article>
            <article className="case-step"><span>02 / RULES</span><h3>设计推荐规则</h3><p>建立硬条件过滤、偏好权重与结果解释，让推荐结论可理解、可复查。</p></article>
            <article className="case-step"><span>03 / FLOW</span><h3>减少操作成本</h3><p>采用“输入—确认—结论”三段流程，把次要信息收纳在结果解释中。</p></article>
            <article className="case-step"><span>04 / BUILD</span><h3>Vibe Coding</h3><p>完成桌面与手机界面、本地数据处理和稳定的端到端交互闭环。</p></article>
            <article className="case-step"><span>05 / TEST</span><h3>固定流程验收</h3><p>覆盖空状态、边界条件、冲突偏好和结果一致性，并持续修正提示与规则。</p></article>
            <article className="case-step"><span>06 / NEXT</span><h3>下一步验证</h3><p>通过真实任务完成率、建议采纳率与复用率判断产品是否真正降低选择成本。</p></article>
          </div>
        </div>
      </section>

      <footer className="case-outro">
        <h2>下一个案例：AI 视频模型评测</h2>
        <div className="case-outro-actions"><a className="button button-secondary" href="/">返回首页</a><a className="button button-primary" href="/work/ai-video-evaluation">继续查看 →</a></div>
      </footer>
    </main>
  );
}
