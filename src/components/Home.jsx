import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './Home.css'
const Home = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/invoices").then((response) => setInvoices(response.data));
  }, []);

  return (
    <div>
      <h2>Invoices</h2>
      <Link to="/invoice">Create Invoice</Link>
      <ul>
        {invoices.map((invoice) => (
          <li key={invoice.id}>
            {invoice.clientName} - ${invoice.amount}{" "}
            <Link to={`/invoice/${invoice.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
