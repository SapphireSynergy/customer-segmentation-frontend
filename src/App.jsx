import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SummaryStatistics from "./pages/SummaryStatistics";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route
            path="statistics/summary"
            element={<SummaryStatistics />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
