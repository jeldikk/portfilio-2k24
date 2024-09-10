import { PreSignUpTriggerHandler } from "aws-lambda";
import { env } from "$amplify/env/pre-sign-up";

export const handler: PreSignUpTriggerHandler = async (event, context) => {
  const email = event.request.userAttributes["email"];
  if (email !== env["ALLOWED_EMAIL"]) {
    const error = new Error("You cannot register to this webapp");
    // cb(error);
    throw error;
  }
  //   cb(null, event);
  return event;
};
