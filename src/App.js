import logo from "./logo.svg";
import "./App.css";
import Products from "./Components/Products/Products";
import AssignmentQuestion from "./Components/AssignmentQuestion/AssignmentQuestion";

function App() {
  return (
    <div className="App">
      <Products></Products>
      <AssignmentQuestion></AssignmentQuestion>
    </div>
  );
}

export default App;
