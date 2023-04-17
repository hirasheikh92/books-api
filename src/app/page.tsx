import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "../shared/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <Hero />;
    </>
  );
}
