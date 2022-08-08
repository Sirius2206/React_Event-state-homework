import React, {useState} from "react";

 function DropdownList({visible}) {
    const dropdownItems = ["Profile Information", "Change Password", "Become PRO", "Help", "Log Out"];
    return (
        <div className={"dropdown-list " + visible}>
            <div className="arrow" />
            {dropdownItems.map(item => 
                <div className="dropdown-item">{item}</div>)}
        </div>
    )
 }
export default DropdownList;