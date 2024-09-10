"use client";

import { Authenticator } from "@aws-amplify/ui-react";

export default function LoginComponent() {
  return (
    <div className="mt-10">
      <Authenticator></Authenticator>;
    </div>
  );
}
