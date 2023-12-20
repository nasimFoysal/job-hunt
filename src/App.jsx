import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <div className="outlet-container">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;
