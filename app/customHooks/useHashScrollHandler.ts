"use client";

// $ Hook to handle smooth scrolling to the hash in the URL
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function useHashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    // Check if there's a hash in the URL
    if (window.location.hash) {
      // Remove the '#' from the hash
      const id = window.location.hash.substring(1);

      // Add a small delay to ensure the component is mounted
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 155);
    }
  }, [pathname]);
}
