import "./App.css";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <header>NETFLIX</header>
      <main>
        <div>
          {data.map((list) => {
            return (
              <div>
                <h1>{list.category}</h1>
                <div>
                  {data.map((picture) => {
                    return <div>{picture.images}</div>;
                  })}
                </div>
              </div>
            );
          })}
          ;
        </div>
      </main>

      <footer>PIED DE PAGE</footer>
    </div>
  );
}

export default App;
