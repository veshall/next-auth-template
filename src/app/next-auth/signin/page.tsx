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

export default function Page() {
  return (
    <main className="h-full flex justify-center items-center">
      <Card>
        <CardHeader className="flex flex-col justify-center items-center">
          <CardTitle>Sign in to AuNext</CardTitle>
          <CardDescription>
            Welcome back! Please sign in to continue...
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Signin />
        </CardContent>
        <CardFooter>
          <p className="text-sm text-zinc-800">
            Don't have an account?
            <Button variant="link">Sign up</Button>
          </p>
        </CardFooter>
      </Card>
    </main>
  );
}
