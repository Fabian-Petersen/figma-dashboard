import * as React from "react";
import type { Metadata } from "next";
import RootLayout from "./rootLayout";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Figma Dashboard",
  description: "Sales Dashboard",
};

// The rootLayout and the layout.tsx was seperated in order to use the hook "usePathname" which can only be used on client side components.
// The login page will not display the menu to the user, so the layout.tsx was created to handle the layout of the login page.

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RootLayout>{children}</RootLayout>;
}
