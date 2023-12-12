import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import LineChart from "./composant/LineChart";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Home />
      <LineChart
        name="regimeMoteur"
        datasArray={[800.0, 800.0, 800.0, 760.0, 760.0, 720.0, 760.0]}
      />
      <LineChart
        name="coupleMoteur"
        datasArray={[25.5, 25.5, 25.5, 25.5, 26.25, 26.25, 29.25]}
      />
    </div>
  );
}

export default App;
