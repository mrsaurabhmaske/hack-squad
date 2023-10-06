import { Routes, Route } from "react-router-dom";
import { Homepage } from "../Pages/Homepage";
import { Interviews } from "../Pages/Interviews";
import { Dashboard } from "../Pages/Dashboard";

export function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/interviews" element={<Interviews />} />
    </Routes>
  );
}
