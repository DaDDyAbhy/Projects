<div align="center">

# ☁️ Google Drive Clone

### A full-stack cloud storage application built with Node.js, Express.js, EJS, MongoDB & Supabase

<p>
  <a href="#-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-installation">Installation</a> •
  <a href="#-how-it-works">How It Works</a> •
  <a href="#-future-improvements">Future Improvements</a>
</p>

<p>
  <a href="https://nodejs.org/">
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
  </a>
  <a href="https://expressjs.com/">
    <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js">
  </a>
  <a href="https://ejs.co/">
    <img src="https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black" alt="EJS">
  </a>
  <a href="https://www.mongodb.com/">
    <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
  </a>
  <a href="https://supabase.com/">
    <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase">
  </a>
  <a href="https://tailwindcss.com/">
    <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
  </a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  </a>
</p>

<p>
  <a href="https://github.com/DaDDyAbhy/Projects">
    <img src="https://img.shields.io/badge/View%20on-GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  </a>
  <a href="https://YOUR-RENDER-APP.onrender.com">
    <img src="https://img.shields.io/badge/Live-Demo-46E3B7?style=for-the-badge&logo=render&logoColor=black" alt="Live Demo">
  </a>
</p>

</div>

---

## 📌 About The Project

**Google Drive Clone** is a cloud-based file storage web application inspired by the core functionality of Google Drive.

The project provides a simple interface where users can create an account, log in securely, upload files, and download their stored files. File metadata is managed through MongoDB while the actual files are stored in Supabase Storage.

This project was built to understand and implement **authentication, protected routes, file handling, database integration, cloud storage and server-side rendering** in a real-world Node.js application.

---

## ✨ Features

- 🔐 **User Registration & Login**
- 🛡️ **Authentication & Protected Routes**
- 📤 **File Upload**
- 📥 **File Download**
- ☁️ **Cloud Storage with Supabase**
- 🗄️ **MongoDB File Metadata Storage**
- 👤 **User-specific File Access**
- 📦 **Multer File Handling**
- 🖥️ **Server-Side Rendering with EJS**
- 🎨 **Tailwind CSS based UI**

---

## 🧰 Tech Stack

| Technology | Purpose |
|------------|---------|
| **Node.js** | JavaScript runtime |
| **Express.js** | Backend web framework |
| **EJS** | Server-side rendered frontend |
| **MongoDB** | Database for users & file metadata |
| **Multer** | Handling multipart/form-data and file uploads |
| **Supabase Storage** | Cloud storage for uploaded files |
| **Tailwind CSS** | Styling and responsive UI |
| **JavaScript** | Application logic |

### 🔗 Technology Documentation

<p>
  <a href="https://nodejs.org/">
    <img src="https://img.shields.io/badge/Node.js-Documentation-339933?style=flat-square&logo=node.js&logoColor=white" alt="Node.js Documentation">
  </a>
  <a href="https://expressjs.com/">
    <img src="https://img.shields.io/badge/Express.js-Documentation-000000?style=flat-square&logo=express&logoColor=white" alt="Express Documentation">
  </a>
  <a href="https://ejs.co/">
    <img src="https://img.shields.io/badge/EJS-Documentation-B4CA65?style=flat-square&logo=ejs&logoColor=black" alt="EJS Documentation">
  </a>
  <a href="https://www.mongodb.com/docs/">
    <img src="https://img.shields.io/badge/MongoDB-Documentation-47A248?style=flat-square&logo=mongodb&logoColor=white" alt="MongoDB Documentation">
  </a>
  <a href="https://supabase.com/docs">
    <img src="https://img.shields.io/badge/Supabase-Documentation-3ECF8E?style=flat-square&logo=supabase&logoColor=white" alt="Supabase Documentation">
  </a>
  <a href="https://tailwindcss.com/docs">
    <img src="https://img.shields.io/badge/Tailwind-Documentation-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind Documentation">
  </a>
</p>

---

## 🏗️ Project Structure

```text
Google-Drive-Clone/
│
├── config/
│   ├── db.js
│   ├── multer.config.js
│   └── supabase.js
│
├── middlewares/
│   └── auth.js
│
├── models/
│   ├── files.models.js
│   └── user.model.js
│
├── public/
│   └── output.css
│
├── Routes/
│   ├── index.routes.js
│   └── user.routes.js
│
├── views/
│   ├── home.ejs
│   ├── index.ejs
│   ├── login.ejs
│   └── register.ejs
│
├── app.js
├── input.css
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## 🔄 How It Works

```text
                    ┌─────────────────┐
                    │      User       │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │   EJS Frontend  │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │ Express Backend │
                    └──────┬─────┬────┘
                           │     │
                 ┌─────────┘     └──────────┐
                 ▼                          ▼
          ┌──────────────┐          ┌────────────────┐
          │   MongoDB    │          │ Supabase       │
          │              │          │ Storage        │
          │ User + File  │          │ Actual Files   │
          │ Metadata     │          │                │
          └──────────────┘          └────────────────┘
```

### 📤 Upload Flow

1. User logs in.
2. User selects a file.
3. Express receives the upload through Multer.
4. The file is uploaded to Supabase Storage.
5. File metadata is stored in MongoDB.
6. The file becomes available to the authenticated user.

### 📥 Download Flow

1. User requests a file.
2. Authentication middleware verifies the logged-in user.
3. MongoDB is checked for the user's file record.
4. Supabase Storage retrieves the file.
5. The file is returned to the user.

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
cd YOUR-REPOSITORY
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```env
MONGODB_URI=your_mongodb_connection_string
SUPABASE_URL=your_supabase_project_url
SUPABASE_KEY=your_supabase_key
SESSION_SECRET=your_session_secret
PORT=3000
```

> ⚠️ Never commit your `.env` file or secret keys to GitHub.

### 4. Start the application

```bash
node app.js
```

If your `package.json` contains a start script:

```bash
npm start
```

Open:

```text
http://localhost:3000
```

---

## 🔐 Security

The application uses protected routes and authentication middleware to restrict access to user-specific resources.

Sensitive configuration values such as database credentials, Supabase keys and session secrets are stored using environment variables.

---

## 🚀 Deployment

The application can be deployed as a single Node.js/Express web service.

### Recommended

**Render**

```text
Build Command:
npm install

Start Command:
node app.js
```

Add all required environment variables in the deployment platform before starting the application.

---

## 🔮 Future Improvements

- 📁 Folder creation and organization
- 🔗 File sharing through links
- 🔍 File search
- 🗑️ Recycle bin
- ⭐ Starred files
- 🖼️ File preview
- 📊 Storage usage dashboard
- 👥 File sharing between users
- 📱 Improved mobile responsiveness

---

## 🎯 Learning Outcomes

Through this project, I gained practical experience in:

- Building backend applications with **Node.js & Express.js**
- Creating server-rendered interfaces using **EJS**
- Implementing authentication and protected routes
- Handling file uploads using **Multer**
- Working with **MongoDB & Mongoose**
- Integrating **Supabase Cloud Storage**
- Managing environment variables securely
- Structuring and deploying a full-stack web application

---

## 👨‍💻 Author

**Abhyuday Singh**

<p>
  <a href="https://github.com/DaDDyAbhy">
    <img src="https://img.shields.io/badge/GitHub-Profile-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Profile">
  </a>
  <a href="https://www.linkedin.com/in/abhyuday-singh-00a59134a/">
    <img src="https://img.shields.io/badge/LinkedIn-Profile-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Profile">
  </a>
</p>

---

<div align="center">

### ⭐ If you found this project useful, consider giving it a star!

**Built with ❤️ using Node.js**

</div>
