'use client'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import * as z from "zod";
import { SaveseatValidation } from "@/lib/validations/saveseat";
import { Input } from "../ui/input";
import { ChangeEvent, useState } from "react";
import  { useRouter } from "next/navigation";

function  SaveSeat() {
  const router = useRouter();
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isInputFocused1, setIsInputFocused1] = useState(false);
  const form = useForm({
    resolver: zodResolver(SaveseatValidation),
    defaultValues: {
      firstName: "",
      email: "",
    },
  });

  async function onSubmit() {  
    const response = await fetch("/api",{
    body: JSON.stringify({
      email:form.getValues('email'),
      name:form.getValues('firstName'),
    }),
    headers: {'Content-Type':`application/json; charset=utf-8`},
    method: 'POST',
  });

  try {
    const json_res = await response.json();
    console.log(json_res);
    if (response.ok){
      router.push('/thankyou');
    }else{
      console.error("Server responded with an error", json_res)
    }
  } catch (error) {
    console.error("Failed to parse JSON:", error);
  }

}
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" flex flex-col gap-6 md:flex-row lg:gap-x-6 md:gap-x-4 w-full justify-center items-center"
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem
              className={`form_input ${
                isInputFocused ? "border-2" : "border-1"
              } space-y-[-6px] w-full h-fit md:p-0 lg:p-2`}
            >
              <FormLabel className="px-3 lg:text-[14px] md:text-xs text-[10px]">
                First Name
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  className="border-0 lg:text-[20px] md:text-sm text-base  lg:placeholder:text-[20px] md:placeholder:text-sm placeholder:text-base no-focus"
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
              } space-y-[-6px] h-fit w-full md:p-0 lg:p-2`}
            >
              <FormLabel className="px-3 lg:text-[14px] md:text-xs text-[10px]">
                Email
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  className="border-0 lg:text-[20px] md:text-sm text-base  lg:placeholder:text-[20px] md:placeholder:text-sm placeholder:text-base no-focus"
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
          className=" w-full lg:h-[75px] md:h-[65px] h-[75px] bg-red-1 hover:bg-red-1/75 text-white rounded-[8px] lg:text-3xl md:text-[24px] text-xl"
        >
          Save your Seat
        </Button>
      </form>
    </Form>
  );
}
export default SaveSeat;