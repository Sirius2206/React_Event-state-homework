import { useState } from 'react';
import './App.css';
import Portfolio from './components/filter/Portfolio';
import Store from './components/layouts/Store'

function App() {
  const [app, setApp] = useState(<Portfolio />);
  const apps = [
    {
      name: "filter",
      component: <Portfolio />
    },
    {
      name: "layouts",
      component: <Store />
    }
  ]

  const handleClick = e => {
    setApp(apps.find(item => item.name === e.target.className).component);
  }
  
  return (
    <div>
      <div>
        <button className='filter' onClick={handleClick}>{"Задание №1(Портфолио)"}</button>
        <button className='layouts' onClick={handleClick}>{"Задание №2(Товары)"}</button>
        <button></button>
      </div>
      {app}
    </div>
  );
}

export default App;
