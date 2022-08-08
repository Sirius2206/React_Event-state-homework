import { useState } from 'react';
import Portfolio from './components/filter/Portfolio';
import Store from './components/layouts/Store'
import Dropdown from './components/dropdown/Dropdown';
import "./App.css"

function App() {
  const [app, setApp] = useState(<Portfolio />);
  const [currentClass, setCurrentClass] = useState("filter");
  const apps = [
    {
      name: "filter",
      component: <Portfolio />
    },
    {
      name: "layouts",
      component: <Store />
    },
    {
      name: "dropdown",
      component: <Dropdown />
    }
  ]

  const handleClick = e => {
    const curApp = apps.find(item => item.name === e.target.className);
    console.log(curApp);
    setApp(curApp.component);
    setCurrentClass(curApp.name);
  }
  
  return (
    <div>
      <header className="header_main">
        <button className='filter' onClick={handleClick}>Задание №1(Портфолио)</button>
        <button className='layouts' onClick={handleClick}>Задание №2(Товары)</button>
        <button className="dropdown" onClick={handleClick}>Задание №3(Список)</button>
      </header>
      <div className={"app_" + currentClass}>{app}</div>
    </div>
  );
}

export default App;
