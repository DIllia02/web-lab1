function Education() {
  return (
    <section id="education" className="scroll-mt-5 rounded-xl border border-slate-300 bg-white p-6 shadow-md">
      <h2 className="mb-4 border-b-2 border-teal-600 pb-2 text-2xl font-semibold">Освіта</h2>

      <article className="mb-4 rounded-md border border-l-4 border-slate-300 border-l-teal-600 bg-slate-100 p-4">
        <h3 className='mb-2 text-lg font-semibold'>Національний університет "Львівська політехніка"</h3>
        <p>Спеціальність: Кібербезпека, бакалавр</p>
        <p>2025 — теперішній час</p>
      </article>

      <article className ="mb-4 rounded-md border border-l-4 border-slate-300 border-l-teal-600 bg-slate-100 p-4">
        <h3 className="mb-2 text-lg font-semibold">Додаткові курси</h3>
        <ul className ="list-disc space-y-1 pl-5">
          <li>
            <a className="font-medium text-teal-800 hover:text-teal-600 hover:underline" href="https://www.cisco.com/c/en/us/training-events/training-certifications/netacad.html">Cisco Networking Academy</a> — Introduction to Cybersecurity
          </li>
          <li>
            <a className="font-medium text-teal-800 hover:text-teal-600 hover:underline" href="https://www.freecodecamp.org">freeCodeCamp</a> — Responsive Web Design
          </li>
        </ul>
      </article>
    </section>
  );
}

export default Education;