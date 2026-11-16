function Experience() {
  return (
    <section id="experience" className="grid scroll-mt-16 gap-x-6 gap-y-3 border-b border-line py-6 last:border-b-0 md:grid-cols-[9.5rem_1fr] md:gap-y-0 md:py-8">
      <h2 className="flex items-center gap-2.5 self-start font-serif text-xl font-bold md:col-start-1 md:row-start-1">
        <span aria-hidden="true" className="size-3 rounded-[50%_50%_0_50%] bg-peach-500" />
        Досвід
      </h2>

      <article className="relative border-l-2 border-line pb-5 pl-5 last:pb-0 md:col-start-2">
        <span aria-hidden="true" className="absolute -left-[7px] top-1.5 size-3 rounded-full border-2 border-mist-500 bg-white" />
        <h3 className="mb-1 font-semibold">Навчальні та особисті проєкти</h3>
        <ul className="list-disc space-y-1 pl-5 marker:text-mist-500">
          <li>Налаштував домашню лабораторію у VirtualBox (Kali Linux і Ubuntu Server)</li>
          <li>
            Пройшов понад 20 кімнат на{' '}
            <a href="https://tryhackme.com" className="text-mist-700 underline underline-offset-4 hover:text-ink">
              TryHackMe
            </a>
          </li>
          <li>Написав простий скрипт на Python для перевірки надійності паролів</li>
          <li>Зробив особисту сторінку-портфоліо на HTML</li>
        </ul>
      </article>
    </section>
  );
}

export default Experience;
