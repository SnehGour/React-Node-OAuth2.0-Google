# 🔐 React + Node.js Google OAuth 2.0 Authentication

A full-stack authentication system built with **React** and **Node.js**, implementing secure **Google OAuth 2.0** login. This project demonstrates a clean, modular way to integrate Google Sign-In in a modern web app.

![Google OAuth Demo](https://user-images.githubusercontent.com/your-image-demo.png) <!-- Optional demo GIF or screenshot -->

---

## 📦 Tech Stack

| Frontend | Backend  | Auth     |
|----------|----------|----------|
| React    | Node.js  | Google OAuth 2.0 |
| Vite / CRA | Express.js | Cookies / JWT (pick one) |

---

## ✨ Features

- 🔑 Google Sign-In via OAuth 2.0
- 👤 User profile retrieval
- 🔐 Protected routes (frontend + backend)
- 📁 Clean folder structure
- ⚙️ Environment variable support

---

## 🛠️ Getting Started

### 🔧 Prerequisites

- Node.js (v18+ recommended)
- Google Developer Console credentials

### ⚙️ Create Google OAuth Credentials

1. Go to [Google Developer Console](https://console.developers.google.com/)
2. Create a project and enable **Google+ API** or **People API**
3. Create **OAuth 2.0 Client ID**
4. Set:
   - Authorized JavaScript Origins: `http://localhost:3000`
   - Authorized redirect URI: `http://localhost:5000/auth/google/callback`

---

## 🚀 Setup & Run

### Backend (Node.js)
```bash
cd server
npm install
# Create .env file (see below)
node index.js
