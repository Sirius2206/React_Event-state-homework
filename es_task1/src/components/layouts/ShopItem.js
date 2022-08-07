import React from "react";

function ShopItem({item}) {
    return (
        <div className="list_item">
            <img className="item-image_list" src={item.img} alt={item.name} />
            <div className="item-name">{item.name}</div>
            <div className="item-color">{item.color}</div>
            <div className="item-price">${item.price}</div>
            <button className="item-buy">Add to cart</button>
        </div>
    )
}

export default ShopItem;