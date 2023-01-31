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
                  {list.images.map((picture) => {
                    console.log(picture);
                    return (
                      <div>
                        <img src={picture} alt="images" />
                      </div>
                    );
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
