
# 🌱 Mali Dekho

**Mali Dekho** is a full-stack MERN application for booking **Malies (gardeners)** online.
The platform connects users with verified malies, allowing easy discovery, booking, and management of gardening services.

The project follows a **client–server architecture** using the MERN stack.

---
## 🚀 Live Preview

**malii-dekhoo.vercel.app**

## 🚀 Tech Stack

### Frontend (Client)

* React.js
* Redux / Context API (if used)
* Axios
* HTML5, CSS3, JavaScript (ES6+)
* Tailwind CSS 

### Backend (Server)

* Node.js
* Express.js
* MongoDB with Mongoose
* JWT Authentication
* bcrypt for password hashing

---

## 📂 Project Structure

```
|-- .github
    |-- workflows
        |-- main.yml
|-- README.md
|-- client
    |-- .gitignore
    |-- README.md
    |-- eslint.config.js
    |-- index.html
    |-- package-lock.json
    |-- package.json
    |-- public
    |-- src
        |-- API
            |-- api.jsx
        |-- App.jsx
        |-- Features
            |-- AppointmentSlice.jsx
            |-- CustomerAPI.jsx
            |-- ItemsSlice.jsx
            |-- SupplierAPI.jsx
            |-- authSlice.jsx
        |-- Routes
            |-- Main.jsx
            |-- Supplier
                |-- CreateServices.jsx
                |-- ServiceManage.jsx
                |-- SupplierDes.jsx
            |-- auth
                |-- Login.jsx
                |-- sigup.jsx
            |-- customer
                |-- BookApp.jsx
                |-- Profile.jsx
                |-- ViewAppointment.jsx
        |-- assets
            |-- 20943930.jpg
            |-- 5124556.jpg
        |-- component
            |-- CustomerComponent
                |-- Appointment.jsx
                |-- BookedAppointment.jsx
                |-- CustomerHome.jsx
                |-- CustomerNavigation.jsx
            |-- Home.jsx
            |-- SupplierComponent
                |-- BookedAppointment.jsx
                |-- BtnCreateApp.jsx
                |-- SupplierNavigation.jsx
                |-- listingAppo.jsx
            |-- btnlogout.jsx
            |-- themeController.jsx
        |-- index.css
        |-- main.jsx
        |-- store
            |-- store.jsx
    |-- vercel.json
    |-- vite.config.js
|-- package.json
|-- server
    |-- .env
    |-- .gitignore
    |-- Controller
        |-- AuthController.js
        |-- CustomerControler.js
        |-- supplierController.js
    |-- Middleware
        |-- SupplierVarification.js
        |-- Validation.js
    |-- Modules
        |-- Appointment.js
        |-- BookApp.js
        |-- User.js
        |-- db.js
    |-- Routes
        |-- BookingRoutes.js
        |-- CustomerRoutes.js
        |-- SupplierRoutes.js
        |-- UserAuth.js
    |-- index.js
    |-- package-lock.json
    |-- package.json

```

---

## ✨ Features

### User

* User registration & login
* Find Mali in there location 
* Book a mali for gardening services
* View booking history

### Mali (Gardener)

* Mali registration & login
* Create Service
* Show Booked Booking and Contact to user
* Change Status Cancel, Pending, Reject

---

## 🔐 Authentication

* JWT-based authentication
* Passwords hashed using bcrypt
* Protected routes for users and malies

---

## ⚙️ Installation & Setup

### Prerequisites

* Node.js (v16+ recommended)
* MongoDB (Atlas)
* Git

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Sujalsharma777/Malii-dekhoo.git
cd Malii-dekhoo
```

---

### 2️⃣ Backend Setup

```bash
cd server
npm install
```


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
