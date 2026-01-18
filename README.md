
# 🌱 Mali Dekho

**Mali Dekho** is a full-stack MERN application for booking **Malies (gardeners)** online.
The platform connects users with verified malies, allowing easy discovery, booking, and management of gardening services.

The project follows a **client–server architecture** using the MERN stack.

---

## 🚀 Tech Stack

### Frontend (Client)

* React.js
* Redux / Context API (if used)
* Axios
* HTML5, CSS3, JavaScript (ES6+)
* Tailwind CSS / Bootstrap (if applicable)

### Backend (Server)

* Node.js
* Express.js
* MongoDB with Mongoose
* JWT Authentication
* bcrypt for password hashing

---

## 📂 Project Structure

```
mali-dekho/
│
├── client/                 # Frontend (React)
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── services/
│       ├── utils/
│       └── App.js
│
├── server/                 # Backend (Node + Express)
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
├── .env
├── package.json
└── README.md
```

---

## ✨ Features

### User

* User registration & login
* Browse available malies
* Book a mali for gardening services
* View booking history

### Mali (Gardener)

* Mali registration & login
* Profile management
* Accept or reject booking requests

### Admin (optional)

* Manage users and malies
* Monitor bookings

---

## 🔐 Authentication

* JWT-based authentication
* Passwords hashed using bcrypt
* Protected routes for users and malies

---

## ⚙️ Installation & Setup

### Prerequisites

* Node.js (v16+ recommended)
* MongoDB (local or Atlas)
* Git

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/mali-dekho.git
cd mali-dekho
```

---

### 2️⃣ Backend Setup

```bash
cd server
npm install
```

Create a `.env` file in the `server` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Run the server:

```bash
npm run dev
```

---

### 3️⃣ Frontend Setup

```bash
cd client
npm install
npm start
```

---

## 🌐 API Endpoints (Sample)

### Auth

* `POST /api/auth/register`
* `POST /api/auth/login`

### Mali

* `GET /api/mali`
* `POST /api/mali/register`

### Booking

* `POST /api/booking/create`
* `GET /api/booking/user/:id`

---

## 🧪 Future Enhancements

* Online payment integration
* Real-time booking updates using Socket.io
* Ratings & reviews
* Location-based mali search
* Admin dashboard analytics

---

## 🤝 Contribution

Contributions are welcome!

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a pull request

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Mali Dekho**
Built using the MERN stack as a real-world service booking platform.

---

If you want, next we can:

* Make this **ATS/interview-friendly**
* Add **API docs (Swagger-style)**
* Simplify it for a **college submission**
* Or tune it for a **production deployment**

The README is the first handshake your project gives the world—this one stands upright.
