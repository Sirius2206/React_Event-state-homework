import React, { useState } from "react";
import IconSwitch from "./IconSwitch";
import CardsView from "./CardsView";
import ListView from "./ListView";
import "../../assets/layouts/css/layouts.css";

function Store() {
  let [view, setView] = useState("view_module");
  const products = [
    {
      name: "Nike Metcon 2",
      price: "130",
      color: "red",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg",
    },
    {
      name: "Nike Metcon 2",
      price: "130",
      color: "green",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg",
    },
    {
      name: "Nike Metcon 2",
      price: "130",
      color: "blue",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg",
    },
    {
      name: "Nike Metcon 2",
      price: "130",
      color: "black",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg",
    },
    {
      name: "Nike free run",
      price: "170",
      color: "black",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg",
    },
    {
      name: "Nike Metcon 3",
      price: "150",
      color: "green",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg",
    },
  ];

  const switchView = () => {
    setView(view === "view_module" ? "view_list" : "view_module");
  };
  return (
    <div>
      <header>
        <IconSwitch icon={view} onSwitch={switchView} />
      </header>
      {view === "view_module" ?
        <CardsView cards={products} /> : 
        <ListView items={products} />
      }
    </div>
  );
}

export default Store;
