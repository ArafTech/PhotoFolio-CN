# 📸 ArafTech PhotoFolio

**PhotoFolio** is a modern photo album management app built with **React + Vite**, allowing users to create albums, upload images directly from their local computer (using Base64), and edit them—all without relying on Firebase Storage.

---

## 🚀 Features

- 📝 Create and manage albums
- 📁 Upload images directly from your local computer (Base64 encoded)
- 🖼️ View, edit, and delete images inside albums
- 🔐 Firebase Firestore integration for data persistence
- ⚡ Built with Vite for fast development
- 📦 No Firebase Storage dependency (no plan upgrade needed!)
- 🔔 Toast notifications for user feedback
- 🌓 Clean, modular component structure using CSS Modules

---

## 📁 Project Structure

araftech-photofolio-cn/
├── public/ # Static files (manifest, index.html, etc.)
├── src/
│ ├── App.jsx # Main app component
│ ├── main.jsx # Vite entry point
│ ├── firebaseinit.js # Firebase configuration and initialization
│ ├── components/
│ │ ├── NavBar/ # Navigation bar
│ │ ├── AlbumForm/ # Album creation form
│ │ ├── AlbumLists/ # Album list display and logic
│ │ └── ImageList/ # Image management inside albums
├── index.html # Root HTML file
├── package.json # Project dependencies and scripts
├── vite.config.js # Vite configuration
└── README.md # You're reading it

📌 Roadmap
 Add image upload from computer

 Album cover support

 Edit/Delete images

 
