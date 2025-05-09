# 🎓 Student Management Dashboard

A modern, responsive **Student Dashboard** web application built using **React.js**, **Firebase Authentication**, **Tailwind CSS**, and mock API simulation (with `axios-mock-adapter` or `setTimeout`). This app allows users to register/login, and manage a list of students with functionality to **create**, **view**, and **delete** students.

---

## 🔥 Features

- 🔐 Firebase Authentication (Signup/Login/Logout)
- 👨‍🎓 Add, view and delete students
- ⏳ Mock API (using `setTimeout` or `axios-mock-adapter`)
- 🧪 Toast notifications using `react-hot-toast`
- 🎨 Beautiful & responsive UI with Tailwind CSS
- ⚡ Smooth network simulations for real-world feel
- 📱 Mobile friendly design
- ✅ Inspect network calls (auth + API simulation)

---

## 🚀 Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **Auth:** Firebase Authentication
- **API Mocking:** Axios / setTimeout
- **Notifications:** react-hot-toast

---

## 🔧 Installation

```bash
# 1. Clone the repo
git clone https://github.com/yourusername/student-dashboard.git
cd student-dashboard

# 2. Install dependencies
npm install

# 3. Add Firebase config
# Create a .env file in the root directory and add the following:
VITE_FIREBASE_API_KEY=your-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
...

# 4. Start the development server
npm run dev
