"use client";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

type Props = {
  children: React.ReactNode;
};

export default function QueryConfigProvider(props: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  );
}
