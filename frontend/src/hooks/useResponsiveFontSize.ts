import { useEffect, useState } from "react";

export default function useResponsiveFontSize() {
  const [fontSize, setFontSize] = useState(18);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 480) setFontSize(14);
      else if (width < 768) setFontSize(16);
      else setFontSize(18);
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return fontSize;
}
