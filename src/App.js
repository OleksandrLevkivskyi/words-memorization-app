import "./App.css";
import { Route, Routes } from "react-router-dom";
import AddWord from "./pages/AddWord/AddWord";
import HomePage from "./pages/HomePage/HomePage";
import RepeatWords from "./pages/RepeatWords/RepeatWords";
import Results from "./pages/Results/Results";

function App() {
  return (
    <div className="app">
      <Routes className="app-wrapper-content">
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddWord />} />
        <Route path="/repeat" element={<RepeatWords />} />
        <Route path="/score" element={<Results />} />
      </Routes>
    </div>
  );
}

export default App;
