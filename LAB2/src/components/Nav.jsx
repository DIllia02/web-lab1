
function Nav() {
  const link =
    "block rounded-md border-l-4 border-transparent px-4 py-2 transition hover:border-teal-600 hover:bg-teal-100";

  return (
    <nav className="self-start rounded-xl border border-slate-300 bg-white p-3 shadow-md md:sticky md:top-5">
      <ul className="flex flex-row flex-wrap gap-1 md:flex-col">
        <li><a href="#about" className={link}>Про себе</a></li>
        <li><a href="#education" className={link}>Освіта</a></li>
        <li><a href="#experience" className={link}>Досвід</a></li>
        <li><a href="#skills" className={link}>Навички</a></li>
        <li><a href="#contacts" className={link}>Контакти</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
