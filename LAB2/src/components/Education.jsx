const courses = [
  {
    name: 'Cisco Networking Academy',
    url: 'https://www.cisco.com/c/en/us/training-events/training-certifications/netacad.html',
    topic: 'Introduction to Cybersecurity',
  },
  {
    name: 'freeCodeCamp',
    url: 'https://www.freecodecamp.org',
    topic: 'Responsive Web Design',
  },
];

function Education() {
  return (
    <section id="education" className="grid scroll-mt-16 gap-x-6 gap-y-3 border-b border-line py-6 last:border-b-0 md:grid-cols-[9.5rem_1fr] md:gap-y-0 md:py-8">
      <h2 className="flex items-center gap-2.5 self-start font-serif text-xl font-bold md:col-start-1 md:row-start-1">
        <span aria-hidden="true" className="size-3 rotate-45 bg-mist-500" />
        Освіта
      </h2>

      <article className="relative border-l-2 border-line pb-5 pl-5 last:pb-0 md:col-start-2">
        <span aria-hidden="true" className="absolute -left-[7px] top-1.5 size-3 rounded-full border-2 border-mist-500 bg-white" />
        <h3 className="font-semibold">Національний університет "Львівська політехніка"</h3>
        <p className="text-muted">Спеціальність: Кібербезпека, бакалавр</p>
        <p className="text-muted">2025 — теперішній час</p>
      </article>

      <article className="relative border-l-2 border-line pb-5 pl-5 last:pb-0 md:col-start-2">
        <span aria-hidden="true" className="absolute -left-[7px] top-1.5 size-3 rounded-full border-2 border-mist-500 bg-white" />
        <h3 className="mb-1 font-semibold">Додаткові курси</h3>
        <ul className="list-disc space-y-1 pl-5 marker:text-mist-500">
          {courses.map((c) => (
            <li key={c.name}>
              <a href={c.url} className="text-mist-700 underline underline-offset-4 hover:text-ink">
                {c.name}
              </a>{' '}
              — {c.topic}
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}

export default Education;
