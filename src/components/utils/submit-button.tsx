"use client";

import { Button } from "flowbite-react";
import { useFormStatus } from "react-dom";

type Props = {
  label: string;
};

export default function SubmitButton(props: Props) {
  const status = useFormStatus();
  const { label } = props;

  return (
    <Button type="submit" isProcessing={status.pending}>
      {label}
    </Button>
  );
}
