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
import { passwordStrength } from "check-password-strength";
import { cn } from "@/lib/utils";

type InputType = z.infer<typeof formSchema>;

export type DiversityType = "lowercase" | "uppercase" | "symbol" | "number";

export interface passStrengthProps {
  id: number;
  value: string;
  contains: DiversityType[];
  length: number;
}

const formSchema = z
  .object({
    email: z.string().email("Please type a valid email"),
    password: z
      .string()
      .trim()
      .min(6, { message: "Password is too short!" })
      .max(24, { message: "Password is too long!" }),
    confirmPassword: z
      .string()
      .trim()
      .min(6, { message: "Password is too short!" })
      .max(24, { message: "Password is too long!" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password doesn't matched!",
    path: ["confirmPassword"],
  });

export default function SigninFormPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passStrength, setPassStrength] = useState<passStrengthProps>({
    id: 0,
    value: "",
    contains: [],
    length: 0,
  });

  const form = useForm<InputType>({
    resolver: zodResolver(formSchema),
  });

  React.useEffect(() => {
    setPassStrength(passwordStrength(form.watch().password));
  }, [form.watch().password]);

  const processForm: SubmitHandler<InputType> = async (formData) => {};

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
                <FormMessage />
              </div>
              <FormControl className="relative">
                <div>
                  <Input
                    type={passwordVisible ? "text" : "password"}
                    placeholder="********"
                    {...field}
                  />

                  <p
                    className={cn(
                      "text-xs font-semibold absolute right-10 bottom-1 transform -translate-y-1/2 text-nowrap",
                      {
                        "text-black dark:text-white": passStrength.length === 0,
                        "text-red-500": passStrength.id === 0,
                        "text-orange-500": passStrength.id === 1,
                        "text-yellow-500": passStrength.id === 2,
                        "text-green-500": passStrength.id === 3,
                      }
                    )}
                  >
                    {!!passStrength.length && passStrength.value}
                  </p>

                  <EyeIcon
                    onMouseDown={() => setPasswordVisible(true)}
                    onMouseUp={() => setPasswordVisible(false)}
                    className="absolute w-4 h-4 right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                  />
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between">
                <FormLabel>Confirm Password</FormLabel>
                <FormMessage />
              </div>
              <FormControl>
                <Input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="********"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button type="submit" className="min-w-full">
          Submit
        </Button>
      </form>
    </Form>
  );
}
