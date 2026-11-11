function Footer() {
  return (
    <footer id="contacts">
      <h2 className="mb-4 border-b-2 border-teal-600 pb-2 text-2xl font-semibold">Контакти</h2>
      <address>
        <p>Email: <a className="font-medium text-teal-800 hover:text-teal-600 hover:underline" href="mailto:example@gmail.com">example@gmail.com</a></p>
        <p>Телефон: <a className="font-medium text-teal-800 hover:text-teal-600 hover:underline" href="tel:+380XX XXX XX XX">+380XX XXX XX XX</a></p>
        <p>GitHub: <a className="font-medium text-teal-800 hover:text-teal-600 hover:underline" href="https://github.com/DIllia02">github.com/DIllia02</a></p>
      </address>
    </footer>
  );
}

export default Footer;