import "./App.css";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <header>NETFLIX</header>
      <main>
        <div>
          {data.map((list) => {
            return <p>{list.category}</p>;
          })}
          ;
          {data.map((img) => {
            return <img src="./data.json" alt="images des films" />;
          })}
          <div>
            <img src="./data.json" alt="" />
          </div>
        </div>
      </main>

      <footer>PIED DE PAGE</footer>
    </div>
  );
}

export default App;
