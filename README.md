Invoice Management System
Overview
💠The Invoice Management System is a simple web application built with React.js and JSON Server. It allows users to create, view, edit, and delete invoices. This project demonstrates the implementation of CRUD operations, form validation, React Router for navigation, and API integration using Axios.

Features
💠User authentication with Login and Sign-Up pages.
💠Create new invoices with fields like Invoice Number, Client Name, Date, Amount, and Status.
💠View a list of all invoices.
💠Edit or delete existing invoices.
💠Backend powered by JSON Server to mock API endpoints.
💠Basic styling for a clean and responsive UI.
💠Tech Stack
💠Frontend
💠React.js
💠React Router DOM
💠Axios
💠Backend
💠JSON Server (Mock API)
Setup Instructions
   💠Prerequisites
   💠Node.js and npm installed on your system.
Steps to Run Locally
  💠Clone the Repository
   git clone https://github.com/HemalathaNunavath/Invoicemanagement.git
   cd invoice-management-system
  💠Install Frontend Dependencies
   npm install
Set Up JSON Server (Backend)
   💠Navigate to the backend directory:
    cd backend
   💠Install dependencies:
    npm install json-server
💠Add the following db.json file in the backend directory:

{
  "invoices": []
}

💠Start the JSON Server:
    npx json-server --watch db.json --port 5000   

💠Run the Frontend
 Navigate back to the project root:
  cd ..
 Start the React development server:
 npm start
The app will be available at http://localhost:3000.     