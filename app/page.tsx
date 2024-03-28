import BottomCta from "./components/bottomCta";
import Header from "./components/header";
import Hero from "./components/hero";

export default function Home() {
  return (
    <main className="relative h-full">
      <Header />
      <div className="mt-[65px]">
        <Hero />
        <BottomCta />
      </div>
    </main>
  );
}
