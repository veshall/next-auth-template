"use client";
import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

type InputType = z.infer<typeof formSchema>;

const formSchema = z.object({
  email: z.string().email("Please type a valid email"),
  password: z.string().min(1, { message: "Please type your password!" }),
});

export default function SigninForm() {
  const form = useForm<InputType>({
    resolver: zodResolver(formSchema),
  });
  return (
    <Form {...form}>
      <form className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="text" placeholder="johndoe@email.com" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between">
                <FormLabel>Password</FormLabel>
                <Link
                  href=""
                  className="text-sm font-medium text-muted-foreground"
                >
                  Forgot Passowrd?
                </Link>
              </div>
              <FormControl className="relative">
                <div className="relative">
                  <EyeIcon className="absolute w-4 h-4 right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
                  <Input type="password" placeholder="********" {...field} />
                </div>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="min-w-full ">
          Submit
        </Button>
      </form>
    </Form>
  );
}
