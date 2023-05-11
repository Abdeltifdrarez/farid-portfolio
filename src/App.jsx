import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Technologies from "./components/Technologies";

function App() {
  return (
    <div className="font-Poppins bg-ghostWhite dark:bg-slate-700">
      <Navbar />
      <Home />
      <Services />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
