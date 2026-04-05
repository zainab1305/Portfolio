import Navbar from "./layout/Navbar"
import Hero  from "./sections/Hero"
import TechStack from "./sections/TechStack"
import About  from "./sections/About"
import Experience from "./sections/Experience"
import Achievements from "./sections/Achievements"
import Contact from "./sections/Contact"
import Projects from "./sections/Projects"
import Footer from "./layout/Footer"

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <About />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;