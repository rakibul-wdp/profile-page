import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import EarningsDashboard from "./pages/Earning";
import TaskDetails from "./pages/Task";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<TaskDetails />} />
          <Route path="/earnings" element={<EarningsDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
