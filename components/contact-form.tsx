import { submitContact } from "@/app/actions";
import { FormSubmitButton } from "@/components/form-submit-button";

export function ContactForm() {
  return (
    <form action={submitContact} className="panel grid gap-4">
      <div className="grid gap-2">
        <label htmlFor="name" className="text-sm font-medium text-slate-200">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100"
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="email" className="text-sm font-medium text-slate-200">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100"
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm font-medium text-slate-200">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100"
        />
      </div>
      <FormSubmitButton label="Send Message" />
    </form>
  );
}
