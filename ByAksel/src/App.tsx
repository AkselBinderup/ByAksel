import { Footer } from "./components/layout/Footer";
import NavigationBar from "./components/layout/NavigationBar";
import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { Hero } from "./components/sections/Hero";
import { Work } from "./components/sections/Work";
import GradualBlur from "./components/ui/GradualBlur";

function App() {
  return (
    <section className="relative, h-screen overflow-hidden"  >
      <div style={{ height: "100%", overflowY: "auto"  }}>
        <NavigationBar />
        <Hero />
        <Work />
        <About />
        <Contact />
        <Footer />
      </div>

      <GradualBlur
        target="parent"
        position="bottom"
        height="6rem"
        strength={5}
        divCount={5}
        curve="bezier"
        exponential={true}
        opacity={1}
      />
    </section>
  );
}

export default App;
