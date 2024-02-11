"use client";
import { z } from "zod";
import { FC } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useStore } from "@/store/store";
import { CardWrapper } from "../card-wrapper/CardWrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import { v4 as uniqueId } from "uuid";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";

export const TodoForm: FC = () => {
  const { selectedDate, addTodo } = useStore((state) => state);

  const formSchema = z.object({
    title: z.string().min(1, {
      message: "Please enter title."
    }),
    description: z.string()
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: ""
    }
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    const { title, description } = data;
    const newTodo = {
      id: uniqueId(),
      title,
      description,
      isDone: false,
      createdAt: selectedDate.date
    };
    addTodo(newTodo);
  };

  return (
    <CardWrapper title="Create todo" description="Enter todays todos in the form.">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Description <span className="text-xs text-neutral-300">(Optional)</span>{" "}
                </FormLabel>
                <FormControl>
                  <Input placeholder="Enter description" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
