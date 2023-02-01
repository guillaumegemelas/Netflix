import "./App.css";
import Section from "./components/Section";
import logo from "../src/pictures/logo.png";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <header>
        <div className="logo">
          <img src={logo} alt="logo Netflix" />
        </div>
      </header>
      <main>
        <div className="section">
          {data.map((list, index) => {
            return <Section key={index} list={list} />;
          })}
        </div>
      </main>

      <footer>PIED DE PAGE</footer>
    </div>
  );
}

export default App;
