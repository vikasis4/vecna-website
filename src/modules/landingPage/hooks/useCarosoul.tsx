import React from "react";
import { useLandingPageActions } from "../slice/landingPageSlice";
import { useAppSelector } from "@/store/hooks";
import { carosoulNoType } from "../types";

function useCarosoul() {
  const { setCarosoulNo } = useLandingPageActions();

  const carosoulNo = useAppSelector(
    (state) => state.landingPage.sectionone.carosoulNo
  );

  React.useEffect(() => {

    const timer = setInterval(() => {
      const newValue = (
        (Number(carosoulNo) + 1) % 5 || 1
      ).toString() as carosoulNoType;

      setCarosoulNo(newValue);
    }, 5000);
    return () => clearInterval(timer);
  }, [carosoulNo, setCarosoulNo]);

}

export default useCarosoul;
