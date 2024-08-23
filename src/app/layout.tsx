import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import ModalProvider from "@/components/modals/modal-provider";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sagala Techtest",
  description: "Frontend developer interview questions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <ModalProvider />
        {children}
      </body>
    </html>
  );
}
