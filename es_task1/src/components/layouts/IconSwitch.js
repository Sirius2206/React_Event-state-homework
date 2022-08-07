import React from "react";

function IconSwitch({icon, onSwitch}) {
  return (
    <span className="material-icons" onClick={onSwitch}>
        {icon === "view_module" ? "view_module" : "view_list"}
    </span> 
  );
}

export default IconSwitch;
