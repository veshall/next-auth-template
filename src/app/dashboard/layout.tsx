import React from "react";
import HeaderBar from "../../components/header-bar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gradient-to-br from-sky-100/80 to-yellow-100/60 min-h-screen w-full">
      <HeaderBar />
      <main>{children}</main>
    </div>
  );
}
