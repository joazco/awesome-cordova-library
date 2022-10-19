import { OrientationLockCordovaType } from "@awesome-cordova-library/screen-orientation";
import React, { useMemo, useState, useEffect } from "react";
import useScreenOrientation from "@awesome-cordova-library/screen-orientation/lib/react";

const CustomHook = () => {
  const [valueOrientation, setValueOrientation] = useState<
    OrientationLockCordovaType | undefined
  >();
  const { lock, unLock, currentOrientation } = useScreenOrientation();

  const orientationOptions = useMemo(() => {
    return [
      { key: "any", value: "any", text: "Any" },
      { key: "landscape", value: "landscape", text: "Landscape" },
      {
        key: "landscape-primary",
        value: "landscape-primary",
        text: "Landscape Primary",
      },
      {
        key: "landscape-secondary",
        value: "landscape-secondary",
        text: "Landscape Secondary",
      },
      { key: "portrait", value: "portrait", text: "Portrait" },
      {
        key: "portrait-primary",
        value: "portrait-primary",
        text: "Portrait Primary",
      },
      {
        key: "portrait-secondary",
        value: "portrait-secondary",
        text: "Portrait Secondary",
      },
    ];
  }, []);

  useEffect(() => {
    if (valueOrientation === undefined) {
      unLock();
    }
  }, [valueOrientation, unLock]);

  return {
    valueOrientation,
    setValueOrientation,
    orientationOptions,
    lock, 
    currentOrientation,
  };
};

export default CustomHook;
