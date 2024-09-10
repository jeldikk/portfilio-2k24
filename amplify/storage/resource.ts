import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
  name: "portfolio-2k24-resumes-bucket",
  access: (allow) => ({
    "resumes/*": [
      allow.guest.to(["read"]),
      allow.authenticated.to(["read", "write"]),
    ],
  }),
});
