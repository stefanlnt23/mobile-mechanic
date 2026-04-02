"use client";

import { useFormStatus } from "react-dom";

type FormSubmitButtonProps = {
  label: string;
};

export function FormSubmitButton({ label }: FormSubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending ? "Sending..." : label}
    </button>
  );
}
