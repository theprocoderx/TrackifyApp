# 💰 MS Trackify – Expense Tracker App

[![Stars](https://img.shields.io/github/stars/Magan248/TrackifyApp?style=social)](https://github.com/Magan248/TrackifyApp/stargazers)

Simple aur responsive **Expense Tracker Application** built with **React.js (Vite)**, jo users ko expenses add, manage, filter aur track karne mein madad karta hai.

🔗 **Live Demo:** https://mstrackify.netlify.app/  
📂 **GitHub Repository:** https://github.com/Magan248/TrackifyApp

---

## 📂 Project Structure

TrackifyApp/
├── node_modules/
├── public/
│ ├── \_redirects
│ └── vite.svg
├── src/
│ ├── assets/
│ ├── components/
│ │ ├── About.jsx
│ │ ├── Contact.jsx
│ │ ├── ContextMenu.jsx
│ │ ├── ExpenseForm.jsx
│ │ ├── ExpenseTable.jsx
│ │ ├── Footer.jsx
│ │ ├── Header.jsx
│ │ ├── Home.jsx
│ │ ├── Input.jsx
│ │ ├── SelectInput.jsx
│ │ └── Sidebar.jsx
│ ├── hooks/
│ │ ├── useFilter.js
│ │ └── useLocalStorage.js
│ ├── App.css
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
├── .gitignore
├── package.json
├── package-lock.json
├── tailwind.config.js ← agar Tailwind use kar rahe ho
├── vite.config.js
└── README.md

---

## 🚀 Features

- ➕ Add new expenses with category & amount
- 📝 Edit & Delete expenses via left-click context menu
- 🔎 Filter expenses by category
- 🔎 Sort expenses alphabetically or by amount
- 🧹 Clear Sort button to reset table ordering
- 💾 Data persistence using LocalStorage
- 📊 Display expenses in a responsive table
- 🎨 Clean & responsive UI (TailwindCSS)

---

## 🛠️ Tech Stack

- **React.js + Vite** (Frontend)
- **JavaScript (ES6+)**
- **CSS / TailwindCSS**
- **LocalStorage API**
- **ESLint + Prettier** (Code Quality & Formatting)
- **Vitest + React Testing Library** (Testing setup)

---

## ⚙️ Getting Started

1. Repository clone karo:
   ```bash
   git clone https://github.com/Magan248/TrackifyApp.git
   ```

# Project directory me jao:

    cd TrackifyApp

# Dependencies install karo:

npm install

# Development server run karo:

npm run dev

# Browser me http://localhost:5173/home

📸 Screenshots

**Home Page**
![HomePage](src/assets/screenshots/DesktopHome.png)

**Add Expense**
![AddDetails](src/assets/screenshots/DesktopAddDetails.png)

**Show & Manage Expenses (Edit/Delete via Context Menu)**
![ShowDetails](src/assets/screenshots/DesktopShowDetailsWithEditDelete.png)

**Update Expense**
![UpdateDetails](src/assets/screenshots/DesktopUpdateDetails.png)

**About Us in Mobile View**
![MobileAboutPage](src/assets/screenshots/MobileAbout.png)

**Show & Manage Expenses (Edit/Delete via Context Menu) in Mobile View**
![MobileDetailsPage](src/assets/screenshots/MobileDetailspage.png)

**Contact Us in Mobile View**
![MobileContactPage](src/assets/screenshots/MobileContact.png)

## 📜 Version Control & Contribution

- Project is maintained with **Git & GitHub** using proper version control practices.
- Authentic and meaningful commit messages are used throughout development.
- Example commit types:
  - `feat:` → 'Create \_redirect file in public folder'
  - `fix:` → for bug fixes
  - `refactor:` → refactor: rename sidebar file for consistency
  - `style:` → update sidebar padding and button color
  - `test:` → for adding/updating tests
  - `chore:` → 'remove tableDemo.jsx and lazy import file and images and remove unused styles'

📌 Future Enhancements

🔐 Add Authentication (Login/Signup)

📤 Export expenses to CSV/PDF

📊 Graphs/Charts for analytics

🌙 Dark mode support

👨‍💻 Author

Magan Singh

🌐 Portfolio: https://mstrackify.netlify.app/

💼 LinkedIn: https://www.linkedin.com/in/magan248

💻 GitHub: https://github.com/Magan248
