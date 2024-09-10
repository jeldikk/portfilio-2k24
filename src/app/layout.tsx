import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@aws-amplify/ui-react/styles.css";
import AmplifyConfigurer from "@/context/amplify.context";
import Header from "@/components/header";
import QueryConfigProvider from "@/context/query.context";
import { AuthDetailsContextProvider } from "@/context/auth.context";
import { fetchUserDetails } from "@/services/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "J Kamal Kumar, Aspiring Cloud Native Fullstack Developer",
  description:
    "Personal Profile and Blog website of J Kamal Kumar with username jeldikk",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let isAuthenticated, user;
  try {
    const userDetails = await fetchUserDetails();
    isAuthenticated = userDetails.isAuthenticated;
    user = userDetails.user;
  } catch (err) {
    isAuthenticated = false;
    user = null;
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <AmplifyConfigurer>
          <QueryConfigProvider>
            <AuthDetailsContextProvider
              details={{
                isAuthenticated: isAuthenticated || false,
                user: user || null,
              }}
            >
              <Header />
              <main>{children}</main>
            </AuthDetailsContextProvider>
          </QueryConfigProvider>
        </AmplifyConfigurer>
      </body>
    </html>
  );
}
