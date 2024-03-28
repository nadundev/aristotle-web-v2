import BottomCta from "./components/bottomCta";
import Brand from "./components/brand";
import Features from "./components/features";
import Header from "./components/header";
import Hero from "./components/hero";
import Testimonials from "./components/testimonials";

export default function Home() {
  return (
    <main className="relative h-full">
      <Header />
      <div className="mt-[65px]">
        <Hero />
        <Brand />
        <Features />
        <Testimonials />
      </div>
    </main>
  );
}
