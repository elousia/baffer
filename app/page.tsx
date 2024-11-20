import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="bg-[#d9d9d9]">
      <section className="cover noise -z-50 max-h-screen overflow-hidden">
        <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>
        <div className="four"></div>
        <div className="five"></div>
      </section>
      <section className="z-50 mx-auto grid min-h-screen max-w-xl place-content-center text-center text-black">
        <div className="flex flex-col">
          <h4 className="text-center text-4xl tracking-wider text-black">
            Easily upload your PDFs and let our AI transform them into
            interactive flashcards.
          </h4>
          <p className="py-7 font-geist-sans font-medium text-zinc-500">
            I have 11 years of experience working on useful and mindful products
            together with startups and known brands
          </p>
          <div className="mx-auto w-full max-w-[16rem]">
            <Link href="/app">
              <Button className="w-full rounded-full py-7 text-lg">
                Get started
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}
