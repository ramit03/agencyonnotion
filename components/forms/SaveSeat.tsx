"use client";
"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import * as z from "zod";
import { SaveseatValidation } from "@/lib/validations/saveseat";
import { useRouter } from "next/router";
import { Input } from "../ui/input";
import { useState } from "react";

function SaveSeat() {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isInputFocused1, setIsInputFocused1] = useState(false);
  const form = useForm({
    resolver: zodResolver(SaveseatValidation),
    defaultValues: {
      firstName: "",
      email: "",
    },
  });

  function onSubmit() {}
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" flex flex-col gap-y-6 md:flex-row md:gap-x-6 w-full justify-center items-center"
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem
              className={`form_input ${
                isInputFocused ? "border-2" : "border-1"
              } space-y-[-4px]`}
            >
              <FormLabel className="px-3 lg:text-[14px] md:text-xs text-[10px]">
                First Name
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  className="border-0 text-[20px]  lg:placeholder:text-[20px] md:placeholder:text-lg placeholder:text-base no-focus"
                  placeholder="Enter your first name"
                  {...field}
                  onFocus={() => setIsInputFocused(true)}
                  onBlur={() => setIsInputFocused(false)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem
              className={`form_input ${
                isInputFocused1 ? "border-2" : "border-1"
              } space-y-[-4px] `}
            >
              <FormLabel className="px-3 lg:text-[14px] md:text-xs text-[10px]">
                Email
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  className="border-0 text-[20px]  lg:placeholder:text-[20px] md:placeholder:text-lg placeholder:text-base no-focus"
                  placeholder="Enter your email"
                  {...field}
                  onFocus={() => setIsInputFocused1(true)}
                  onBlur={() => setIsInputFocused1(false)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="md:w-1/3 w-full h-[75px] bg-gray-2 text-white rounded-[8px] lg:text-3xl md:text-[26px] text-xl"
        >
          Save your Seat
        </Button>
      </form>
    </Form>
  );
}
export default SaveSeat;
