import React from "react";
import { Button } from "../ui/button";
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

interface SocialBtnProps {
  label: "Github" | "Twitter";
}

const icon = {
  GitHub: GitHubLogoIcon,
  Twitter: TwitterLogoIcon,
};

export default function SocialLoginBtn({ label }: SocialBtnProps) {
  let Icon;
  switch (label) {
    case "Github":
      Icon = icon.GitHub;
      break;
    case "Twitter":
      Icon = icon.Twitter;
      break;
    default:
      console.error("Unsupported social login provider");
      return null;
  }
  return (
    <Button variant="outline" className="flex-grow cursor-pointer" asChild>
      <div className="flex justify-center gap-2 items-center">
        <Icon />
        {label}
      </div>
    </Button>
  );
}
