import logo from "./logo.svg";
import "./App.css";
import User from "./User";

function App() {
  let data = "Arshdeep";
  function apple() {
    data = "arshdeep singh"; //idr data update krre hai h1 me kyo nhi hora hai??? so to overcome rom this
    //state and props introduced
    alert(data);
  }
  return (
    <div className="App">
      <h1> {data} </h1>
      {/* <button onClick={apple()}> click me!!</button>   */}
      <button onClick={() => apple()}> click me!!</button>
    </div>
  );
}


export default App;
