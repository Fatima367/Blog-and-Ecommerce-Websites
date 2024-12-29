import Hero from "./hero/page";
import About from "./about/page";
import Content from "./content/page";

export default async function Home() {
  return (
    <div>
      <Hero />
      <Content />
      <About />
    </div>
  );
} 