import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SummaryStatistics from "./pages/SummaryStatistics";
import StaffManagement from "./pages/StaffManagement";
import ComponentViews from "./pages/ComponentViews";
import DashboardSegmentation from "./pages/DashboardSegmentation";
import AlgorithmSettings from "./pages/AlgorithmSettings";
import PrivateRoute from "./components/PrivateRoute"; // Import PrivateRoute

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="statistics/summary"
            element={<PrivateRoute element={SummaryStatistics} />}
          />
          <Route
            path="staff-management"
            element={<PrivateRoute element={StaffManagement} />}
          />
          <Route
            path="dashboard-segmentation"
            element={<PrivateRoute element={DashboardSegmentation} />}
          />
          <Route
            path="/algorithm-settings"
            element={<PrivateRoute element={AlgorithmSettings} />}
          />
          <Route
            path="page-tests"
            element={<PrivateRoute element={ComponentViews} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
