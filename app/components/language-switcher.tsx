type LanguageSwitcherProps = {
  current: "zh" | "en";
  zhHref: string;
  enHref: string;
};

export default function LanguageSwitcher({ current, zhHref, enHref }: LanguageSwitcherProps) {
  return (
    <div className="language-switcher" aria-label="Language switcher">
      <a href={zhHref} lang="zh-CN" aria-current={current === "zh" ? "page" : undefined}>中</a>
      <span aria-hidden="true">/</span>
      <a href={enHref} lang="en" aria-current={current === "en" ? "page" : undefined}>EN</a>
    </div>
  );
}
