"use client";
// $ Layout for the whole app, including the navbar.
// import Navbar from "@/components/navbar/navbarDesktop/NavbarHomePage";
import MobileNavbar from "@/components/navbar/navbarMobile/MobileNavbar";
import NavbarHomePage from "@/components/navbar/navbarDesktop/NavbarHomePage";

// $ Context Providers
import Providers from "./providers";
import useScreenSize from "./hooks/useScreenSize";
type Props = {
  children: React.ReactNode;
};

import { NavProvider } from "./contexts/MenuToggleContext";

export default function RootLayout({ children }: Props) {
  const isMobile = useScreenSize(640);
  return (
    <html lang="en" className="font-poppins light">
      <body className="bg-bgLight dark:bg-bgDark">
        <Providers>
          <NavProvider>
            {isMobile ? <MobileNavbar /> : <NavbarHomePage />}
            {children}
          </NavProvider>
        </Providers>
      </body>
    </html>
  );
}
