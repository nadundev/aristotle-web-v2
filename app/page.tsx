import BottomCta from "./components/bottomCta";
import Header from "./components/header";

export default function Home() {
  return (
    <main className="relative h-full">
      <Header />
      <div className="mt-[65px]">
        <BottomCta />
      </div>
    </main>
  );
}
