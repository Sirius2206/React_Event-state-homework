import React from "react";
import ShopCard from "./ShopCard";

function CardsView({cards}) {
    return (
            <div className="cards">
                {cards.map(item =>
                    <ShopCard item={item} />
                )}
            </div>
    )
}

export default CardsView;