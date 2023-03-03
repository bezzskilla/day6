import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer'
import Main from './components/Main';
import { useState } from 'react';

//компонент ререндерится при изменении внутреннего состояния

function App() {
  const [count, setCount] = useState(0)

  const incrementClick = () => {
    // setCount(newState)
    setCount((prev) => prev + 1)
  }

  console.log('render');

  // let exCount = 0;

  return (
    <div className="App">
      <Header />

      <hr />
      {count}
      <hr />

      <button onClick={incrementClick} >Plus one</button>
      <button onClick={() => setCount((prev) => prev - 1)} >Minus one</button>

      <hr />

      {/* {exCount}
      BAD PRACTICE
      <button onClick={() => exCount++} >Plus one</button> */}

      <Main />

      <Footer />
    </div>
  );
}

export default App;
