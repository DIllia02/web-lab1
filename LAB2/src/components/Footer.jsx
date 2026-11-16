function Footer() {
  const link = 'text-mist-700 underline underline-offset-4 hover:text-ink';
  return (
    <footer
      id="contacts"
      className="relative grid scroll-mt-16 gap-x-6 gap-y-3 overflow-hidden rounded-b-3xl bg-sage-100 px-5 py-6 md:grid-cols-[9.5rem_1fr] md:px-10 md:py-8"
    >
      <span
        aria-hidden="true"
        className="absolute -bottom-16 -right-10 size-44 rounded-full bg-peach-300"
      />
      <h2 className="flex items-center gap-2.5 self-start font-serif text-xl font-bold md:col-start-1 md:row-start-1">
        <span aria-hidden="true" className="size-3 rounded-full bg-mist-500" />
        Контакти
      </h2>
      <address className="relative z-10 flex flex-wrap gap-x-8 gap-y-1 not-italic md:col-start-2">
        <p>
          Email:{' '}
          <a href="mailto:example@gmail.com" className={link}>
            example@gmail.com
          </a>
        </p>
        <p>
          Телефон:{' '}
          <a href="tel:+380XX XXX XX XX" className={link}>
            +380XX XXX XX XX
          </a>
        </p>
        <p>
          GitHub:{' '}
          <a href="https://github.com/DIllia02" className={link}>
            github.com/DIllia02
          </a>
        </p>
      </address>
    </footer>
  );
}

export default Footer;
