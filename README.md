# 🎓 Student Management Dashboard

A modern, secure, and responsive **Student Dashboard** web app built with **React.js**, **Firebase Authentication**, **Firestore Database**, and **Tailwind CSS**. Users can register/login, view students, search by course, and add/delete students — all protected under authentication.

---

## 🔥 Features

- 🔐 **Authentication**: Signup/Login with Firebase Auth
- 👨‍🎓 **Add Student**: Add new students to **Firestore DB**
- 🔎 **Search**: Search students by **course**
- 👁️‍🗨️ **Auth Protection**: Only authenticated users can view or add student details
- ❌ **Delete Student**: Remove student records from Firestore
- 💬 **Toast Alerts**: `react-hot-toast` for feedback on actions (success/error/loading)
- 📡 **Mock API** (for initial testing via `axios-mock-adapter` or `setTimeout`)
- 🎨 Responsive UI using **Tailwind CSS**
- 🔍 **Inspect Firebase calls** in browser devtools

---

## 🚀 Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Auth & DB**: Firebase Auth + Firestore
- **API Simulation**: Axios / setTimeout (for mocking)
- **Notifications**: react-hot-toast

---

## 🛠️ Installation

```bash
# Clone the repo
git clone https://github.com/yourusername/student-dashboard.git
cd student-dashboard

# Install dependencies
npm install

# Add Firebase config
# Create a .env file in the root directory:
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_APP_ID=your-app-id
...

# Start development
npm run dev
