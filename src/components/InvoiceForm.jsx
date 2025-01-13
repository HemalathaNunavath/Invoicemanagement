import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./InvoiceForm.css"

const InvoiceForm = () => {
  const [form, setForm] = useState({ invoiceNumber: "", clientName: "", date: "", amount: "", status: "" });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/invoices/${id}`).then((response) => setForm(response.data));
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      axios.put(`http://localhost:5000/invoices/${id}`, form).then(() => navigate("/home"));
    } else {
      axios.post("http://localhost:5000/invoices", form).then(() => navigate("/home"));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{id ? "Edit Invoice" : "Create Invoice"}</h2>
      <input type="text" placeholder="Invoice Number" value={form.invoiceNumber} onChange={(e) => setForm({ ...form, invoiceNumber: e.target.value })} required />
      <input type="text" placeholder="Client Name" value={form.clientName} onChange={(e) => setForm({ ...form, clientName: e.target.value })} required />
      <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} required />
      <input type="number" placeholder="Amount" value={form.amount} onChange={(e) => setForm({ ...form, amount: e.target.value })} required />
      <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} required>
        <option value="">Select Status</option>
        <option value="Paid">Paid</option>
        <option value="Unpaid">Unpaid</option>
        <option value="Pending">Pending</option>
      </select>
      <button type="submit">Save</button>
    </form>
  );
};

export default InvoiceForm;
