import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Routines } from "./Components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/routines" element={<Routines />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
