import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <h1 className="App-h1">DICTIONARY</h1>
        <main>
          <Dictionary />
        </main>
      </div>
      <footer className="App-footer">
        <small>Coded by Itzel Gil</small>
      </footer>
    </div>
  );
}
