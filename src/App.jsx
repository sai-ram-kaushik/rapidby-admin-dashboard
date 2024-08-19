import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import ProtectedRoute from "./utils/ProtectedRoute";
import Layout from "./utils/Layout";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Orders from "./pages/Orders";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="flex flex-col">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/admin/dashboard/*"
              element={<ProtectedRoute Component={AdminDashboard} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
};

const AdminDashboard = () => {
  return (
    <Layout>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </Layout>
  );
};
export default App;
