import { Input } from "@/components/ui/input";

import React from "react";
import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Stack from "@/components/stack";

export default function Page() {
  return (
    <section className="mx-auto w-full max-w-[100rem] p-2">
      <div className="mx-aut max-w-x place-content-centr grid w-full justify-center">
        <Header />
      </div>
      <div className="mt-10 grid w-full place-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        <Stack />
        <Stack />
        <Stack />
        <Stack />
        <Stack />
        <Stack />
        <Stack />
        <Stack />
      </div>
    </section>
  );
}
