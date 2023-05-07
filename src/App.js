import "./App.css";
import Menu from "./components/menu";
import FieldSubmit from "./components/fieldSubmit";
import Card from "./components/card";

function App() {
  return (
    <div className="App">
        <Menu></Menu>
      <div id="containerGeneral">
        <FieldSubmit></FieldSubmit>
        <Card></Card>
      </div>
    </div>
  );
}

export default App;
