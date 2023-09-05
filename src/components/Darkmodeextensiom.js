import React from "react";

export default function Darkmodeextensiom() {
  const handleDarkmode = () => {
    document.body.style.backgroundColor = "black";
    document.body.style.Color = "white";
  };
  return (
    <div>
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        onClick={handleDarkmode}
        id="flexSwitchCheckDefault"
      />
    </div>
  );
}
