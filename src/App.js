import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import RegisterLoginCard from "./components/RegisterLoginCard";

function App() {
  return (
    <BrowserRouter>
      <div>
        <p>ciao</p>
      </div>
      <Routes>
        <Route path="/" element={<RegisterLoginCard />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
