import Intro from './components/Intro.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Process from './components/Process.jsx';
import Portfolio from './components/Portfolio.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Intro />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
