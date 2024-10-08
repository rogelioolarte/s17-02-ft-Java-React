import Brands from "../components/container/Brands";
import Hero from "../components/container/Hero";
import About from "../components/pure/About";
import Contact from "../components/pure/Contact";
import JoinUs from "../components/pure/JoinUs";
import Service from "../components/pure/Service";

export default function AboutPage() {
  return (
    <div className="min-h-full min-w-full flex flex-col justify-center">
      <Hero />
      <Brands />
      <About />
      <JoinUs />
      <Service />
      <Contact />
    </div>
  )
}
