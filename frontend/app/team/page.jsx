import { Navbar } from "@/components/Navbar";

export default function TeamPage() {
  return (
    <main className="min-h-screen px-6 py-32 text-white">
      <Navbar />
      <section className="mx-auto flex min-h-[50vh] max-w-3xl items-center justify-center text-center">
        <h1 className="text-3xl font-bold sm:text-5xl">
          This page will display all the core team members.
        </h1>
      </section>
    </main>
  );
}
