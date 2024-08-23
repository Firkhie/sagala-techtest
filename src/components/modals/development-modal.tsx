"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { useDevelopmentStore } from "@/store/development-store";
import { v4 as uuidv4 } from "uuid";

import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, ImageIcon } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  tech: z.array(z.string()),
  date: z.date({ required_error: "Data is required" }),
});

const techContents = [
  {
    name: "Apple",
    image: "/tech-logos/apple-logo.png",
  },
  {
    name: "Android",
    image: "/tech-logos/android.png",
  },
  {
    name: "Windows",
    image: "/tech-logos/windows.png",
  },
];

export default function DevelopmentModal() {
  const { isOpen, onClose, addData } = useDevelopmentStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      tech: [],
      date: undefined,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const progress = Math.floor(Math.random() * 100) + 1;
      const newDate = format(values.date, "d.MMM.yyyy");
      addData({
        id: uuidv4(),
        name: values.name,
        images: values.tech,
        progress,
        date: newDate,
      });
    } catch (error) {
      console.log(error);
    } finally {
      form.reset();
      onClose();
    }
  }
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-4">
            Input Data - Development Table
          </DialogTitle>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-4"
            >
              {/* Name Input */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Input name here..." {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className="flex w-full gap-x-5">
                {/* Tech Input */}
                <FormField
                  control={form.control}
                  name="tech"
                  render={({ field }) => (
                    <FormItem className="flex flex-1 flex-col">
                      <FormLabel>Tech</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "pl-3 text-left font-normal",
                                field.value.length === 0 &&
                                  "text-muted-foreground",
                              )}
                            >
                              {field.value.length > 0
                                ? `Selected (${field.value.length})`
                                : "Select tech"}
                              <ImageIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <div className="flex flex-col gap-y-2 rounded-md border p-3 pr-28">
                            {techContents.map((content) => (
                              <FormControl key={content.name}>
                                <div className="flex items-center gap-x-3 text-sm">
                                  <Checkbox
                                    checked={field.value.includes(
                                      content.image,
                                    )}
                                    onCheckedChange={(checked) => {
                                      if (checked) {
                                        field.onChange([
                                          ...field.value,
                                          content.image,
                                        ]);
                                      } else {
                                        field.onChange(
                                          field.value.filter(
                                            (item) => item !== content.image,
                                          ),
                                        );
                                      }
                                    }}
                                  />
                                  <p>{content.name}</p>
                                </div>
                              </FormControl>
                            ))}
                          </div>
                        </PopoverContent>
                      </Popover>
                    </FormItem>
                  )}
                />
                {/* Date Input */}
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="flex flex-1 flex-col">
                      <FormLabel>Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground",
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit" variant="custom">
                Submit
              </Button>
            </form>
          </Form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
