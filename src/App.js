import "./App.css";
import Section from "./components/Section";
import logo from "../src/pictures/logo.png";

function App() {
  return (
    <div className="App">
      <header>
        <div className="logo">
          <img src={logo} alt="logo Netflix" />
        </div>
      </header>
      <main>
        <Section></Section>
      </main>

      <footer>PIED DE PAGE</footer>
    </div>
  );
}

export default App;
