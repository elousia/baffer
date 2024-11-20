import { Input } from "@/components/ui/input";

import React from "react";
import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Stack from "@/components/stack";

export default function Page() {
  return (
    <div className="mx-auto grid w-full max-w-xl place-content-center">
      <Header />
      <Stack />
    </div>
  );
}
