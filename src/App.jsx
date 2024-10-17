import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SummaryStatistics from "./pages/SummaryStatistics";
import StaffManagement from "./pages/StaffManagement";
import ComponentViews from "./pages/ComponentViews";

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
          <Route path="staff-management" element={<StaffManagement />}></Route>
          <Route path="page-tests" element={<ComponentViews />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
