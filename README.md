# Octarnal Task Dashboard

A responsive, single-page React Dashboard application built as part of a Frontend Intern technical assessment.  
The project includes authentication, protected routing, and a fully designed dashboard interface integrated with a live REST API.

---

## 📌 Short Description

This project is a modern React-based dashboard application that includes:

- 🔐 Login Authentication System
- 📊 Interactive Dashboard UI
- 📡 REST API Integration
- 🛡 Protected Routes
- 🎨 Pixel-accurate UI replication from provided design

The application follows best practices in React architecture, clean component structure, and responsive UI development.

---

## 🌐 Live Links

- 🔗 **Live Site:** (https://octarnal-task-dashboard.netlify.app)  
- 💻 **Frontend Repository:** (https://github.com/Abrar9410/Octarnal-task-dashboard)

---

## 🛠 Technologies Used

- ⚛ **React (v19)**
- ⚡ **Vite**
- 🧭 **React Router (Data Mode)**
- 🎨 **Tailwind CSS**
- 📡 **REST API Integration**
- 🧭 **React-hook-form**
- 📊 Custom SVG Charts
- 🔐 Authentication with API

---

## 📦 Dependencies

```bash
react
react-dom
react-router-dom
tailwindcss
```

## ⚙ Installation & Setup

1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

2️⃣ Install Dependencies
```bash
npm install
```

3️⃣ Start Development Server
```bash
npm run dev
```

The app will run at:
http://localhost:5173

## 🔐 Authentication Flow

- The Login Page is the entry point of the application.

- Credentials are validated using the provided REST API.

- Upon successful login:

- User session/token is stored locally.

- User is redirected to the Dashboard.

- Dashboard route is protected using React Router Data APIs.

## 📊 Dashboard Features

- Responsive layout based on provided Dribbble design

- Analytics chart (multi-color bar system)

- Project progress semi-circle chart (multi-segment SVG)

- Statistics cards

- Team members section

- Search bar & profile header section

- Loading spinner for API states

- Error handling for failed API requests

## 📱 Responsiveness

The application is fully responsive and optimized for:

- Desktop

- Tablet

- Mobile devices

Built using Tailwind CSS utility-first approach for consistent spacing and layout.
