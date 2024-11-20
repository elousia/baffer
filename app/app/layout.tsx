import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-[#f3f3f3] py-20">{children}</div>
  );
}
