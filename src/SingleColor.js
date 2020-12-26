import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ index, weight, rgb, hexColor }) => {
  const [alert, setAlert] = useState(false);

  const bcg = rgb.join(",");
  const hexValue = `#${hexColor}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
      return () => clearTimeout(timeout);
    }, 3000);
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className="percent-value">{weight} </p>

      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert"> copied to the clipboard</p>}
    </article>
  );
};

export default SingleColor;
