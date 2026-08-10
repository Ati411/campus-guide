export default function Page() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      <header className="bg-slate-800/75 backdrop-blur sticky top-0 z-30 border-b border-slate-700"></header>
      <section className="max-w-5xl mx-auto px-6 py-12 flex flex-col-reverse md:flex-row items-start gap-10">
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-extrabold font-mono mb-4">Hello</h2>
          <p className="text-slate-300 mb-6">
            I'm a Computer and Information Science student.
          </p>

          <ul className="text-sm space-y-1 text-slate-300 mt-6 font-mono">
            <li>
              <strong className="text-slate-200">My Name:</strong> Athiwat
              Tangrusicharoen
            </li>
            <li>
              <strong className="text-slate-200">Student ID:</strong>{" "}
              673450041-1
            </li>
            <li>
              <strong className="text-slate-200">Major:</strong> Computer and
              Information Science
            </li>
            <li>
              <strong className="text-slate-200">University:</strong> Khon Kaen
              University
            </li>
          </ul>
        </div>
      </section>
      <section id="contact" className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-2xl font-semibold mb-4 font-mono">Contact</h3>
        <p className="text-slate-300 mb-4">check my GitHub.</p>
        <div className="flex gap-4">
          <a
            href="https://github.com/Ati411"
            className="text-green-300 hover:underline"
          >
            GitHub
          </a>
        </div>
      </section>

      <footer className="border-t border-slate-800"></footer>
    </main>
  );
}
