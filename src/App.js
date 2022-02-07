import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navbar/NavBar";
import ItemListContainer from "./components/cards/ItemListContainer";
import ItemCount from "./components/cards/ItemCount";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <ItemListContainer greetings="Hello!" />
        <ItemListContainer greetings="Bonjour!" />
        <ItemCount />
      </div>
    </>
  );
}

export default App;
