import React from "react";

function Toolbar({filters, selected, onSelectFilter}) {
    const handleClick = e => {
        const elem = e.target;
        onSelectFilter(elem.innerText);
        elem.classList.add("button_active");
    }
    return (
        <div>
            {filters.map(item => 
                <button className={"button " + (item === selected ? "button_active" : "")}
                        onClick={handleClick}>
                            {item}
                        </button>
                )}
        </div>
    )
}

export default Toolbar;