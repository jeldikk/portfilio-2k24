"use server";

import { cookiesClient } from "@/utils/amplify.server";

export async function createMessageAction(formData: FormData) {
  const contact = formData.get("contact") as string;
  const message = formData.get("message") as string;

  try {
    const res = await cookiesClient.models.message.create({
      contact,
      message,
    });
  } catch (err) {}
}
