"use client";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import React from "react";
import config from "../../amplify_outputs.json";

Amplify.configure(config, { ssr: true });

type Props = {
  children: React.ReactNode;
};

export default function AmplifyConfigurer(props: Props) {
  const { children } = props;
  return <Authenticator.Provider>{children}</Authenticator.Provider>;
}
