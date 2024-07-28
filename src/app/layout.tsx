import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@aws-amplify/ui-react/styles.css";
import AmplifyConfigurer from "@/components/amplify-configurer";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "J Kamal Kumar, Aspiring Cloud Native Fullstack Developer",
  description: "Profile and Experience details",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AmplifyConfigurer>
          <Header />
          <main>{children}</main>
        </AmplifyConfigurer>
      </body>
    </html>
  );
}
