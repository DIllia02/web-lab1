const links = [
  { href: '#about', label: 'Про себе' },
  { href: '#education', label: 'Освіта' },
  { href: '#experience', label: 'Досвід' },
  { href: '#skills', label: 'Навички' },
  { href: '#contacts', label: 'Контакти' },
];

function Nav() {
  return (
    <nav className="sticky top-0 z-20 border-y border-line bg-white px-5 py-1.5 md:px-10">
      <ul className="-ml-3 flex flex-wrap gap-1">
        {links.map((l, i) => (
          <li key={l.href}>
            <a
              href={l.href}
              className={`block rounded-lg px-3 py-2 hover:bg-mist-100 hover:text-ink ${
                i === 0 ? 'font-semibold text-ink' : 'text-muted'
              }`}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
