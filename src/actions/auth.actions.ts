"use server";

export async function fetchAuthDetails() {
  const res = await fetch("/api/auth/user", { credentials: "include" });
  const body = await res.json();
  return body;
}
