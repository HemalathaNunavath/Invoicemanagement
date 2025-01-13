import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import InvoiceForm from "./components/InvoiceForm";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route path="/invoice" element={<InvoiceForm />} />
      <Route path="/invoice/:id" element={<InvoiceForm />} />
    </Routes>
  );
};

export default App;
