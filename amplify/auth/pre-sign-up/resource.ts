import { defineFunction } from "@aws-amplify/backend";

console.log({ allowed_email: process.env.ALLOWED_EMAIL });

export const preSignUp = defineFunction({
  name: "pre-sign-up",
  entry: "./handler.ts",
  runtime: 20,
  environment: {
    ALLOWED_EMAIL: process.env.ALLOWED_EMAIL!,
  },
});
