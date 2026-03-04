import Navbar from "./layout/Navbar"
import Hero  from "./sections/Hero"
import About  from "./sections/About"
import Experience from "./sections/Experience"
import Contact from "./sections/Contact"
import Projects from "./sections/Projects"
import Footer from "./layout/Footer"
function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;