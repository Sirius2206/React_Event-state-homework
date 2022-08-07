import React from "react";

function ShopCard ({item}) {
    return (
        <div className="card">
            <h2 className="item-name"> {item.name}</h2>
            <span className="item-color">{item.color}</span>
            <img className="item-image" src={item.img} alt={item.name}/>
            <div className='card__purchase'>
                <span className="item-price">${item.price}</span>
                <button className="item-buy">Add to cart</button>
            </div>
        </div>
    )
}
export default ShopCard;