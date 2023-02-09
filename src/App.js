import logo from "./logo.svg";
import "./App.css";
import AccountCounter from "./components/AccountCounter";
import PlatformCounter from "./components/PlatformCounter";
import PlatformDisplay from "./components/PlatformDisplay";
import AccountDisplay from "./components/AccountDisplay";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: "flex", gap: 20 }}>
          <AccountCounter />
          <PlatformCounter />
        </div>

        <img src={logo} className="App-logo" alt="logo" />
        <div style={{ display: "flex" }}>
          <AccountDisplay />
          <PlatformDisplay />
        </div>
      </header>
    </div>
  );
}

export default App;
