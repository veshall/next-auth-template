"use client";

import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

type InputType = z.infer<typeof formSchema>;

const formSchema = z.object({
  email: z.string().email("Please type a valid email"),
  password: z.string().min(1, { message: "Please type your password!" }),
});

export default function SigninFormPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const form = useForm<InputType>({
    resolver: zodResolver(formSchema),
  });

  const processForm: SubmitHandler<InputType> = async (formData) => {
    console.log(formData);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(processForm)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <div className="flex justify-between items-center">
                <FormLabel>Email</FormLabel>
                <FormMessage />
              </div>
              <FormControl>
                <Input type="text" placeholder="johndoe@email.com" {...field} />
              </FormControl>
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
                  className="text-xs font-medium text-muted-foreground"
                >
                  Forgot Passowrd?
                </Link>
              </div>
              <FormControl className="relative">
                <div>
                  <div className="relative">
                    <EyeIcon className="absolute w-4 h-4 right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
                    <Input
                      type={passwordVisible ? "text" : "password"}
                      placeholder="********"
                      {...field}
                    />
                  </div>
                  <EyeIcon
                    onMouseDown={() => setPasswordVisible(true)}
                    onMouseUp={() => setPasswordVisible(false)}
                    className="absolute w-4 h-4 right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                  />
                </div>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="min-w-full disabled:cursor-not-allowed"
        >
          Continue
        </Button>
      </form>
    </Form>
  );
}
