function Header() {
  return (
    <header className="relative flex items-center justify-between gap-6 overflow-hidden rounded-t-3xl bg-mist-100 px-5 py-7 md:px-10 md:py-10">
      {/* Фігури (декор) */}
      <span
        aria-hidden="true"
        className="absolute -right-14 -top-16 size-44 rounded-full bg-sage-300 md:-right-6 md:top-1/2 md:size-60 md:-translate-y-1/2"
      />
      <span
        aria-hidden="true"
        className="absolute -bottom-8 right-24 size-12 rotate-[18deg] rounded-2xl bg-peach-300 md:right-40 md:size-16"
      />

      {/* Текст */}
      <div className="relative z-10">
        <h1 className="mb-1 font-serif text-3xl font-bold leading-tight md:text-4xl">
          Дімбровський Ілля Андрійович
        </h1>
        <p className="italic text-muted">Junior-спеціаліст з кібербезпеки (студент)</p>
      </div>

      {/* Аватар з ініціалами */}
      <div
        aria-hidden="true"
        className="relative z-10 hidden size-28 shrink-0 place-items-center rounded-full border-4 border-white bg-mist-300 font-serif text-3xl font-bold text-mist-700 md:grid"
      >
        ДІ
        <span className="absolute -left-1.5 bottom-2 size-6 rounded-full border-[3px] border-white bg-peach-500" />
      </div>
    </header>
  );
}

export default Header;
