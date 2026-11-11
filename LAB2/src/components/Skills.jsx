function Skills() {
  return (
    <section id="skills" className="scroll-mt-5 rounded-xl border border-slate-300 bg-white p-6 shadow-md">
      <h2 className="mb-4 border-b-2 border-teal-600 pb-2 text-2xl font-semibold">Навички</h2>

      <h3 className="mb-2 text-lg font-semibold">Технічні</h3>
      <ul className="list-disc space-y-1 pl-5">
        <li>Основи мереж (TCP/IP, DNS, HTTP)</li>
        <li>Linux (командний рядок)</li>
        <li>Python (базовий рівень)</li>
        <li>HTML, Git</li>
        <li>Wireshark, Nmap (початковий рівень)</li>
      </ul>

      <h3 className="mb-2 text-lg font-semibold">Мови</h3>
      <ul className="list-disc space-y-1 pl-5">
        <li>Українська — рідна</li>
        <li>Англійська — B1</li>
      </ul>
    </section>
  );
}

export default Skills;