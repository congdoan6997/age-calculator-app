"use client";
import Image from "next/image";
import { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { Input } from "@/components/ui/input";
import { calculateAge } from "@/lib/utils";

const ageSchema = z.object({
  day: z.coerce
    .number()
    .max(31, { message: "Must be less than 31" })
    .min(1, { message: "Must be greater than 0" }),
  month: z.coerce
    .number()
    .min(1, { message: "Must be greater than 0" })
    .max(12, { message: "Must be less than 12" }),
  year: z.coerce
    .number()
    .min(1900, { message: "Must be greater than 1900" })
    .max(2023, { message: "Must be less than 2023" }),
});
export default function Home() {
  const [age, setAge] = useState({ days: 0, months: 0, years: 0 });
  const form = useForm<z.infer<typeof ageSchema>>({
    resolver: zodResolver(ageSchema),
    defaultValues: {
      day: 1,
      month: 1,
      year: 1997,
    },
  });

  function onSubmit(values: z.infer<typeof ageSchema>) {
    // console.log(values);
    const { years, months, days } = calculateAge(
      new Date(values.year, values.month - 1, values.day),
    );
    setAge({
      years: years ? years : 0,
      months: months ? months : 0,
      days: days ? days : 0,
    }); //calculateAge({years, months, days})
    console.log(age);
  }

  return (
    <main className="h-screen bg-neutral-offWhite flex justify-center items-center">
      <section
        className="bg-neutral-white xl:w-2/5 w-[90%] md:h-3/4 flex flex-col 
      xl:rounded-3xl rounded-xl p-12 xl:rounded-br-[200px] rounded-br-[100px] shadow-md "
      >
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col"
          >
            <div className="flex gap-10 max-sm:flex-col">
              <FormField
                control={form.control}
                name="day"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-neutral-smokeyGrey tracking-widest">
                      DAY
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="h-16 p-5 border border-neutral-smokeyGrey rounded-md text-3xl font-bold
            !ring-primary-purple 2xl:w-36 w-32 max-sm:w-full"
                        placeholder="DD"
                        {...field}
                      />
                    </FormControl>
                    {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="month"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-neutral-smokeyGrey tracking-widest">
                      MONTH
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="h-16 p-5 border border-neutral-smokeyGrey rounded-md text-3xl font-bold
            !ring-primary-purple 2xl:w-36 w-32 max-sm:w-full"
                        placeholder="MM"
                        {...field}
                      />
                    </FormControl>
                    {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="year"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-neutral-smokeyGrey tracking-widest">
                      YEAR
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="h-16 p-5 border border-neutral-smokeyGrey rounded-md text-3xl font-bold
            !ring-primary-purple 2xl:w-36 w-32 max-sm:w-full"
                        placeholder="YYYY"
                        {...field}
                      />
                    </FormControl>
                    {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/* <Button type="submit">Submit</Button> */}
            <div className="flex justify-between items-center h-fit mt-2">
              <hr className="flex-1 text-neutral-smokeyGrey" />
              <Button
                type="submit"
                className="text-neutral-offWhite bg-primary-purple rounded-full h-12 w-12"
              >
                <Image
                  src={"/assets/images/icon-arrow.svg"}
                  alt="arrow"
                  width={24}
                  height={24}
                />
              </Button>
            </div>
          </form>
        </Form>

        <div className="flex flex-col">
          <div className="flex">
            <p className="2xl:text-8xl text-7xl max-sm:text-4xl font-bold text-primary-purple italic tracking-widest">
              {age.years === 0 ? "--" : age.years}
            </p>
            <p className="2xl:text-8xl text-7xl max-sm:text-4xl font-bold italic">
              years
            </p>
          </div>
          <div className="flex">
            <p className="2xl:text-8xl text-7xl max-sm:text-4xl font-bold text-primary-purple italic tracking-widest">
              {age.months}
            </p>
            <p className="2xl:text-8xl text-7xl max-sm:text-4xl font-bold italic">
              months
            </p>
          </div>
          <div className="flex">
            <p className="2xl:text-8xl text-7xl max-sm:text-4xl font-bold text-primary-purple italic tracking-widest">
              {age.days}
            </p>
            <p className="2xl:text-8xl text-7xl max-sm:text-4xl font-bold italic">
              days
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
