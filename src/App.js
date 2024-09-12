import logo from "./logo.svg";
import "./App.css";
import "./css/font.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>SneakMax</p>
        <p className="test">Каталог</p>
        <p className="test-2">Перейти к покупкам</p>
      </header>
    </div>
  );
}

export default App;
