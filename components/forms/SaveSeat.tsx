'use client'
'use client'
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import * as z from "zod";
import { SaveseatValidation } from "@/lib/validations/saveseat";
import { useRouter } from "next/router";
import { Input } from "../ui/input";

function SaveSeat(){
  
    const form = useForm({
        resolver: zodResolver(SaveseatValidation),
        defaultValues:{
            firstName: '',
            email: '',
        }
    })  
   
    function onSubmit(){

    }
    return(
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" flex flex-row gap-x-6 items-end">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input 
                  type="text"
                  className="form_input "
                  placeholder="Enter your first name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    )
}
export default SaveSeat;