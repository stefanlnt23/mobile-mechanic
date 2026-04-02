"use server";

export async function submitQuote(formData: FormData): Promise<void> {
  const name = String(formData.get("name") ?? "");
  const phone = String(formData.get("phone") ?? "");

  if (!name || !phone) {
    return;
  }

  await new Promise((resolve) => setTimeout(resolve, 900));
}

export async function submitContact(formData: FormData): Promise<void> {
  const name = String(formData.get("name") ?? "");
  const email = String(formData.get("email") ?? "");
  const message = String(formData.get("message") ?? "");

  if (!name || !email || !message) {
    return;
  }

  await new Promise((resolve) => setTimeout(resolve, 700));
}
