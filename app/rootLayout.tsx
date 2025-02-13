"use client";
// $ Layout for the whole app, including the navbar.

// $ Context Providers
import Providers from "./providers";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className="font-poppins light">
      <body className="bg-bgLight dark:bg-bgDark">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
