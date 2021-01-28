import React, { useState, useEffect } from "react";

function useDefalutSize() {
  const [checkDevice, setcheckDevice] = useState("devicepc");

  const checkWidth = () => {
    if (window.innerWidth > 500) {
      setcheckDevice("devicepc");
    } else {
      setcheckDevice("devicemobile");
    }
  };

  useEffect(() => {
    checkWidth();

    return () => {
      checkWidth();
    };
  }, []);

  return { checkDevice };
}

export default useDefalutSize;
