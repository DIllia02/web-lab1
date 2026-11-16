const technical = [
  'Основи мереж (TCP/IP, DNS, HTTP)',
  'Linux (командний рядок)',
  'Python (базовий рівень)',
  'HTML, Git',
  'Wireshark, Nmap (початковий рівень)',
];

const languages = ['Українська — рідна', 'Англійська — B1'];

function Skills() {
  return (
    <section id="skills" className="grid scroll-mt-16 gap-x-6 gap-y-3 border-b border-line py-6 last:border-b-0 md:grid-cols-[9.5rem_1fr] md:gap-y-0 md:py-8">
      <h2 className="flex items-center gap-2.5 self-start font-serif text-xl font-bold md:col-start-1 md:row-start-1">
        <span aria-hidden="true" className="size-3 rounded-[50%_0] bg-sage-500" />
        Навички
      </h2>

      <div className="grid gap-4 sm:grid-cols-2 md:col-start-2">
        <div className="rounded-2xl bg-sage-100 p-5">
          <h3 className="mb-1 font-semibold">Технічні</h3>
          <ul className="list-disc space-y-1 pl-5 marker:text-sage-500">
            {technical.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl bg-peach-100 p-5">
          <h3 className="mb-1 font-semibold">Мови</h3>
          <ul className="list-disc space-y-1 pl-5 marker:text-peach-500">
            {languages.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
