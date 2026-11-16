import Header from './components/Header'
import Nav from './components/Nav'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-page px-2 py-3 text-ink md:px-4 md:py-8">
      <div className="mx-auto max-w-4xl rounded-3xl border border-line bg-white shadow-[0_8px_30px_rgba(43,52,64,0.06)]">
        <Header />
        <Nav />
        <main className="px-5 md:px-10">
          <About />
          <Education />
          <Experience />
          <Skills />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
