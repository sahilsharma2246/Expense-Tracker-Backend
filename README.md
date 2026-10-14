# ⚙️ Expense Tracker REST API (Backend)

Robust RESTful API service for the Expense Tracker application, supporting JWT user authentication, MongoDB Atlas storage, and transaction management endpoints.

---

## 📌 Note for Viewers & Recruiters
This repository contains the **Backend REST API source code** for the Expense Tracker application. The system follows a decoupled architecture where the API server runs independently from the frontend client.
* **Frontend Repository:** [Expense-Tracker-Frontend](https://github.com/sahilsharma2246/Expense-Tracker-Frontend)
* **Live Application:** [Click here to view Live Site](https://illustrious-meerkat-829958.netlify.app)
* **Live Base API Endpoint:** `https://expense-tracker-backend-11zd.onrender.com/api`

---

## ✨ Features
- **Authentication Routes:** Hashed passwords using bcrypt and JWT token verification.
- **Protected Endpoints:** Middleware guard ensuring users can access only their own transactions.
- **MongoDB Atlas Integration:** Persistent NoSQL cloud database storage.
- **CORS Configured:** Secure cross-origin requests allowed for frontend origin.

---

## 🛠️ Tech Stack
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB Atlas (Mongoose ODM)
- **Security:** JSON Web Tokens (JWT), bcryptjs
- **Deployment:** Render

---

## 📡 API Endpoints Summary

### Authentication Routes (`/api/users`)
- `POST /api/users/register` - Create a new account
- `POST /api/users/login` - Authenticate user and return JWT token

### Transaction Routes (`/api/trans`) *(Protected)*
- `GET /api/trans` - Fetch all transactions for logged-in user
- `POST /api/trans` - Add a new expense/income entry
- `DELETE /api/trans/:id` - Delete a specific transaction entry

---


Follow these steps to run the backend API server on your local machine:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/sahilsharma2246/Expense-Tracker-Backend.git](https://github.com/sahilsharma2246/Expense-Tracker-Backend.git)
   cd Expense-Tracker-Backend
