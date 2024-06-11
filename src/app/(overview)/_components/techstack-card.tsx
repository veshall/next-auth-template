import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import NextAuthLogo from "../../../../public/logo-sm.png";
import prismaSvg from "../../../../public/prisma.svg";
import tailwind from "../../../../public/tailwind.svg";
import vercel from "../../../../public/vercel.svg";

const logoDetails = [
  { id: 1, src: NextAuthLogo, label: "Next Auth" },
  { id: 2, src: prismaSvg, label: "Prisma" },
  { id: 3, src: tailwind, label: "Tailwind" },
  { id: 4, src: vercel, label: "Shad/cn" },
];

export default function TechStackCard() {
  return (
    <Card className="bg-transparent">
      <CardHeader>
        <CardDescription>AuNext comes with</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-evenly items-center gap-2">
        {logoDetails.map((L) => (
          <Logo src={L.src} key={L.id} label={L.label} />
        ))}
      </CardContent>
    </Card>
  );
}

interface logoProps {
  key: number;
  src: string;
  label: string;
}
function Logo({ key, src, label }: logoProps) {
  return (
    <div className="grid justify-end items-center gap-4">
      <Image
        decoding="async"
        loading="lazy"
        src={src}
        width={50}
        alt="Next-auth logo"
      />
      <span className="text-sm font-semibold text-zinc-700">{label}</span>
    </div>
  );
}
