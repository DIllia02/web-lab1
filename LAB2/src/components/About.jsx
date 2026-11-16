function About() {
  return (
    <section id="about" className="grid scroll-mt-16 gap-x-6 gap-y-3 border-b border-line py-6 last:border-b-0 md:grid-cols-[9.5rem_1fr] md:gap-y-0 md:py-8">
      <h2 className="flex items-center gap-2.5 self-start font-serif text-xl font-bold md:col-start-1 md:row-start-1">
        <span aria-hidden="true" className="size-3 rounded-full bg-sage-500" />
        Про себе
      </h2>
      <p className="text-lg md:col-start-2">
        Студент 2 курсу, цікавлюся{' '}
        <span className="rounded-sm bg-peach-300/60 px-1">кібербезпекою</span> та
        веброзробкою. Самостійно вивчаю основи етичного хакінгу, регулярно
        проходжу задачі на навчальних платформах. Шукаю стажування, щоб
        здобути практичний досвід.
      </p>
    </section>
  );
}

export default About;
