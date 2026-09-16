import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";

export default function ResourcesPage() {
  return (
    <main className="min-h-screen px-6 py-32 text-white">
      <Navbar />
      <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center gap-8 text-center">
        <h1 className="text-3xl font-bold sm:text-5xl">Resources</h1>
        <div className="flex w-full max-w-md flex-col gap-4 sm:flex-row">
          <a
            className="flex-1"
            href="https://leetcode.com/problemset/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-full" size="lg">LeetCode</Button>
          </a>
          <a
            className="flex-1"
            href="https://codeforces.com/problemset"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-full" size="lg">Codeforces Problem Sets</Button>
          </a>
        </div>
      </section>
    </main>
  );
}
