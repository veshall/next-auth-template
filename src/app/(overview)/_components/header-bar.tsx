import React from "react";
import { CubeIcon } from "@heroicons/react/24/solid";
import { Button } from "../../../components/ui/button";
import Link from "next/link";

export default function HeaderBar() {
  return (
    <div className="fixed top-0 z-40 backdrop-blur-[8px] flex w-full px-4 items-center border-b shadow-sm h-14">
      <div className="md:max-w-screen-2xl mx-auto flex justify-between items-center w-full">
        <div className="flex gap-2 items-center justify-center">
          <CubeIcon className="size-8" />
          <span className="font-semibold text-xl">AuNext</span>
        </div>
        <div className="space-x-4">
          <Link href="/next-auth/signin">
            <Button variant="default">Sign In</Button>
          </Link>
          <Link href="/next-auth/signup">
          <Button variant="ghost">Sign Up</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
