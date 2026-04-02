import { submitQuote } from "@/app/actions";
import { FormSubmitButton } from "@/components/form-submit-button";

export function QuoteForm() {
  return (
    <form action={submitQuote} className="panel grid gap-4">
      <div className="grid gap-2">
        <label htmlFor="name" className="text-sm font-medium text-slate-200">
          Full Name *
        </label>
        <input
          id="name"
          name="name"
          required
          className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100"
          placeholder="Your full name"
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="phone" className="text-sm font-medium text-slate-200">
          Phone Number *
        </label>
        <input
          id="phone"
          name="phone"
          required
          className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100"
          placeholder="07..."
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="vehicle" className="text-sm font-medium text-slate-200">
          Vehicle Make / Model / Year *
        </label>
        <input
          id="vehicle"
          name="vehicle"
          required
          className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100"
          placeholder="Ford Focus 2018"
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="serviceType" className="text-sm font-medium text-slate-200">
          Service Type
        </label>
        <select
          id="serviceType"
          name="serviceType"
          className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100"
        >
          <option>Mechanic Repair</option>
          <option>Car Servicing</option>
          <option>Paint Correction</option>
          <option>Ceramic Coating</option>
          <option>Diagnostics</option>
        </select>
      </div>
      <div className="grid gap-2">
        <label htmlFor="details" className="text-sm font-medium text-slate-200">
          Tell us the issue or desired finish
        </label>
        <textarea
          id="details"
          name="details"
          rows={5}
          className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100"
          placeholder="Describe symptoms, warning lights, or detailing goals..."
        />
      </div>
      <FormSubmitButton label="Get My Free Quote" />
    </form>
  );
}
