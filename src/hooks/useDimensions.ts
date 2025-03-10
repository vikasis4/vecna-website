import React from "react";

const useDimensions = () => {
  const [isMobileView, setIsMobileView] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const mobileView = window.innerWidth < 1024;
      setIsMobileView(mobileView);
    }
  }, []);

  return { isMobileView };
};

export default useDimensions;
