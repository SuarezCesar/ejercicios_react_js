import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navbar/NavBar";
import ItemListContainer from "./components/navbar/ItemListContainer";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <ItemListContainer greetings="Hello!" />
        <ItemListContainer greetings="Bonjour!" />
      </div>
    </>
  );
}

export default App;
