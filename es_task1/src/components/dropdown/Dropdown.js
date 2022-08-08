import React, {useState} from "react";
import DropdownList from "./DropdownList";
import "../../assets/dropdown/dropdown.css"

 function Dropdown() {
    const [visible, setVisible] = useState('');
    const handleClick = () => {
        setVisible(visible ==='' ? "dropdown-list_visible" : '')
    }
    return (
        <div className="container">
            <button className="dropdown-button" onClick={handleClick}>
                <span>Account settings</span>
                <i className="material-icons material-icons_small">public</i>
                <div className="wrapper" />
                </button>
            <DropdownList visible={visible} />
        </div>
    )
 }
export default Dropdown;