"use client";
import { Button, Label, Textarea, TextInput } from "flowbite-react";
import { FieldErrors, useForm } from "react-hook-form";

type Inputs = {
  contact: string;
  message: string;
};

export default function ContactMeForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    mode: "all",
  });

  const calculateFieldColor = (
    fieldErrors: FieldErrors<Inputs>,
    fieldName: keyof Inputs
  ) => {
    const errorState = errors[fieldName];
    if (errorState) {
      return "failure";
    } else {
      return "";
    }
  };

  const generateHelperText = (
    fieldErrors: FieldErrors<Inputs>,
    fieldName: keyof Inputs
  ) => {
    const errorState = fieldErrors[fieldName];
    return <span>{errorState?.message}</span>;
  };

  const onValidSubmit = async (data: Inputs) => {
    const { contact, message } = data;
    const response = await fetch("/api/contact-me", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ contact, message }),
    });
    const body = await response.json();
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onValidSubmit)}>
      <div>
        <div className="mb-2 block">
          <Label
            className="font-bold"
            color={calculateFieldColor(errors, "contact")}
            htmlFor="contact"
            value="Your email"
          />
        </div>
        <TextInput
          {...register("contact", {
            required: {
              value: true,
              message: "Email is required",
            },
          })}
          placeholder="If you would like to contact"
          color={calculateFieldColor(errors, "contact")}
          helperText={generateHelperText(errors, "contact")}
        />
      </div>
      <div className="my-2">
        <div className="mb-2 block">
          <Label
            className="font-bold"
            htmlFor="message"
            value="Your message"
            color={calculateFieldColor(errors, "message")}
          />
        </div>
        <Textarea
          {...register("message", {
            required: {
              value: true,
              message: "Missing Text Message",
            },
          })}
          rows={10}
          color={calculateFieldColor(errors, "message")}
          helperText={generateHelperText(errors, "message")}
        />
      </div>
      <div className="button-controls">
        <Button type="submit" isProcessing={isSubmitting}>
          Send Message
        </Button>
      </div>
    </form>
  );
}
