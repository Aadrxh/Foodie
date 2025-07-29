# 🍴 Foodie — Full-Stack Restaurant App

A modern full-stack web application for browsing, ordering, and managing a wide variety of food items. Built using **React** (Frontend) and **Express.js** (Backend), integrated with **MongoDB**, and developed rapidly using **Vite**.

---

![Foodie Homepage](images/foodie-home-light.png)
*<sup>Homepage - Light Mode</sup>*

---

## 📑 Table of Contents

- [🔧 Tech Stack](#-tech-stack)
  - [🖥️ Frontend](#️-frontend)
  - [🌐 Backend](#-backend)
- [✨ Key Features](#-key-features)
- [🚀 Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [🐳 Docker Setup (Recommended)](#-docker-setup-recommended)
  - [📦 Manual Installation](#-manual-installation)
  - [🔧 Development Setup](#-development-setup)
  - [⚙️ Environment Variables](#-environment-variables)
- [📁 Project Structure](#-project-structure)
- [🐳 Docker Commands](#-docker-commands)
- [🧪 Linting](#-linting)
- [🧰 Scripts](#-scripts)
- [📝 Notes](#-notes)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [🙌 Acknowledgements](#-acknowledgements)

---

## 🔧 Tech Stack

### 🖥️ Frontend
- **React 18.3**
- **Vite** (fast development tooling)
- **React Router DOM** (routing)
- **GSAP** (animations)
- **ESLint** (linting)

### 🌐 Backend
- **Node.js + Express**
- **MongoDB** with **Mongoose**
- **CORS + JSON Middleware**
- **dotenv** (environment management)
- **Razorpay** (payment gateway)

---

## ✨ Key Features

- 🥗 **Explore a variety of dishes**
- 🛒 **Add to cart, checkout, and order**
- 🖤 **Wishlist and user auth**
- 🌗 **Light/Dark mode toggle**
- 💳 **Online payment with Razorpay**
- 📱 **Mobile-friendly responsive UI**

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn
- MongoDB (local or [Atlas](https://www.mongodb.com/cloud/atlas))

---

### 📦 Manual Installation

```bash
# Clone the repository
git clone https://github.com/your-username/foodie.git
cd foodie
```

---

#### Frontend

```bash
cd frontend
npm install
npm install gsap
npm run dev
```

---

#### Backend

```bash
cd backend 
npm install
npm install dotenv
```

---

### ⚙️ Environment Variables

Create a `.env` file in your `backend` directory with the following:

```env
MONGODB_URI=your_mongodb_connection_string
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

---

### 🔧 Development Setup

**Start Backend:**

```bash
cd backend
npm run server
```

> Backend runs at [`http://localhost:4000`](http://localhost:4000)

**Start Frontend:**

```bash
npm run dev
```

> Frontend typically runs at [`http://localhost:5173`](http://localhost:5173)

---
## 📁 Project Structure

```
├── public/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── main.jsx
│   └── ...
├── backend/
│   ├── server.js
│   ├── routes/
│   │   └── foodRoute.js
│   ├── config/
│   │   └── db.js
│   └── ...
├── docs/
│   └── images/
├── vite.config.js
├── eslint.config.js
├── package.json
└── README.md
```

---

## 🧪 Linting

ESLint is pre-configured for React and Hooks.

```bash
# Frontend linting
cd frontend && npm run lint

# Admin linting
cd admin && npm run lint
```

---

## 🧰 Scripts

| Command             | Description                      |
|---------------------|----------------------------------|
| `npm run dev`       | Start Vite development server    |
| `npm run build`     | Build frontend for production    |
| `npm run preview`   | Preview production build         |
| `npm run lint`      | Run ESLint checks                |
| `node server.js`    | Start backend server             |

---

## 📝 Notes

- Ensure **MongoDB** is running locally or update `MONGODB_URI` in your `.env` file.
- Backend and frontend run as separate servers. Use the correct ports as needed.
- You can update API routes via `routes/foodRoute.js` (backend).
- Payment integration requires valid Razorpay credentials.

---

## 🤝 Contributing

We welcome contributions!

- ⭐ **Star this repository** to show support.
- 🐛 **Report bugs** or **suggest features** through issues.
- 🔧 **Submit pull requests** for improvements.
- 📖 **Help improve documentation.**

> For detailed contribution steps, see [CONTRIBUTING.md](CONTRIBUTING.md).

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Razorpay](https://razorpay.com/)

