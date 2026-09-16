import { Inter } from "next/font/google";
import "./globals.css";
import { DynamicBackground } from "@/components/DynamicBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DJS CodeStars | Competitive Programming Club",
  description: "The official competitive programming committee of DJ Sanghvi College of Engineering.",
  icons: {
    icon: "/codestarslogo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-black text-white relative min-h-screen selection:bg-yellow-400 selection:text-black`}>
        <DynamicBackground />
        {children}
      </body>
    </html>
  );
}
