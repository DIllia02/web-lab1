import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans">
      <div className="mx-auto max-w-5xl p-3 md:p-5 grid gap-5 md:grid-cols-[14rem_1fr]">
        <Header />
        <Nav />
        <main className="flex flex-col gap-5">
          <About />
          <Education />
          <Experience />
          <Skills />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;