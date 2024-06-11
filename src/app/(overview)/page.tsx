import { GitHubLogoIcon } from "@radix-ui/react-icons";
import TechStackCard from "./_components/techstack-card";

export default function Home() {
  return (
    <div className="pt-24 flex justify-center items-center flex-col">
      <button className="p-2 px-8 bg-sky-200/40 rounded-full text-blue-600 flex gap-2 justify-between items-center hover:bg-sky-200 transition:">
        <GitHubLogoIcon className="w-4 h-4" />
        <span className="tracking-wide font-semibold text-sm">
          Introducing AuNext
        </span>
      </button>
      <div className="flex flex-col items-center justify-center gap-4 pt-8 p-2">
        <h1 className="text-7xl text-center font-semibold tracking-tighter bg-gradient-to-br from-zinc-900 to-zinc-500 text-transparent bg-clip-text">
          Next-Auth Template for your <br /> Next project
        </h1>
        <span className="p-2 pt-4 text-zinc-700">
          An open-source NextJs template.
        </span>

        <TechStackCard />
      </div>
    </div>
  );
}
