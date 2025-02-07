"use client";
// $ Layout for the whole app, including the navbar.

// $ Context Providers
import Providers from "./providers";

// $ Import custom hook to check if the size is mobile or not to change Navbar components
import { useHashScroll } from "./customHooks/useHashScrollHandler";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  useHashScroll();
  return (
    <html lang="en" className="font-poppins light">
      <body className="bg-bgLight dark:bg-bgDark">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
