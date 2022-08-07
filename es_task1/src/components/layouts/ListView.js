import React from "react";
import ShopItem from "./ShopItem";

function ListView({items}) {
    return (
        <div className="list">
            {items.map(item =>
                <ShopItem item={item} />
            )}
        </div>
)
}

export default ListView;