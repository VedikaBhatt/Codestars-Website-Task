import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Events } from "@/components/Events";
import { Footer } from "@/components/Footer";
import "@/app/globals.css";

export default function Home() {
  return (
    <main className="relative flex min-h-screen w-full flex-col text-white selection:bg-yellow-400 selection:text-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <Events />
      <Footer />
    </main>
  );
}
