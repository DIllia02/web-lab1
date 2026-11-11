function Experience() {
  return (
    <section id="experience" className="scroll-mt-5 rounded-xl border border-slate-300 bg-white p-6 shadow-md">
      <h2 className="mb-4 border-b-2 border-teal-600 pb-2 text-2xl font-semibold">Досвід</h2>

      <article className="mb-4 rounded-md border border-l-4 border-slate-300 border-l-teal-600 bg-slate-100 p-4">
        <h3 className='mb-2 text-lg font-semibold'>Навчальні та особисті проєкти</h3>
        <ul className="list-disc space-y-1 pl-5">
          <li>Налаштував домашню лабораторію у VirtualBox (Kali Linux і Ubuntu Server)</li>
          <li>Пройшов понад 20 кімнат на <a className="font-medium text-teal-800 hover:text-teal-600 hover:underline" href="https://tryhackme.com">TryHackMe</a></li>
          <li>Написав простий скрипт на Python для перевірки надійності паролів</li>
          <li>Зробив особисту сторінку-портфоліо на HTML</li>
        </ul>
      </article>
    </section>
  );
}

export default Experience;