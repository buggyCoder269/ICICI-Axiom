import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../modules/Login/Login";

export default function AppRoutes() {
  return (
    <Routes>
      {/* PUBLIC */}
      <Route path="/login" element={<Login />} />

      <Route
        path="/"
        element={<Navigate to="/login" replace />}
      />

      {/* FALLBACK */}
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
}