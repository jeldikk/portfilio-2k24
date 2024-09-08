"use server";

import { cookiesClient } from "@/utils/amplify.server";

export async function createMessageAction(formData: FormData) {
  console.log({ formData });
  const contact = formData.get("contact") as string;
  const message = formData.get("message") as string;
  console.log({ contact, message });

  try {
    const res = await cookiesClient.models.message.create({
      contact,
      message,
    });
    console.log({ res });
  } catch (err) {}
}
