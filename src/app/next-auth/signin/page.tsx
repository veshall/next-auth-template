import Signin from "@/components/forms/signin";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function SigninPage() {
  return (
    <main>
      <div className="container grid h-svh flex-col items-center justify-center bg-primary-foreground lg:max-w-none lg:px-0">
        <Card>
          <CardHeader className="flex flex-col justify-center items-center">
            <CardTitle>
              {" "}
              <div className="mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[400px] ">
                <div className="mb-4 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-6 w-6"
                  >
                    <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                  </svg>
                  <h1 className="text-xl font-semibold">Your Logo</h1>
                </div>{" "}
              </div>
            </CardTitle>
            <CardDescription className="self-start">
              Welcome back! Please sign in to continue...
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Signin />
            <Separator className="mt-6" />
          </CardContent>
          <CardFooter>
            <p className="text-sm text-zinc-800">
              Don't have an account?
              <Button variant="link">Sign up</Button>
            </p>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
