import { Navbar } from "@/components/Navbar";

export default function GalleryPage() {
  return (
    <main className="min-h-screen px-6 py-32 text-white">
      <Navbar />
      <section className="mx-auto flex min-h-[50vh] max-w-3xl items-center justify-center text-center">
        <h1 className="text-3xl font-bold sm:text-5xl">
          All the images of past events will be shown here.
        </h1>
      </section>
    </main>
  );
}
