import { useState, useEffect } from "react";

// Change the Navbar bg to white when scrolled

const useIsScrolled = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // $ Check when the page has been scrolled and set the state to true.
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  // $ Calculate the scroll progress of the page and assign it to the state.
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //$ Return the Scroll Condition and the Scroll Progress
  return { isScrolled, scrollProgress, setIsScrolled };
};

export default useIsScrolled;
