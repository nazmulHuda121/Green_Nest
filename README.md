# 🌱 GreenNest – Indoor Plant Care & Store

**Assignment Category:** `Assignment-09_category_daisy`

## 🪴 Project Overview

**GreenNest** is a modern single-page web app for plant lovers to explore, buy, and care for indoor plants.  
Users can browse plants, read care tips, and book expert consultations — all within a calm, nature-inspired interface.

---

## 🎯 Key Features

✅ **Responsive Design** – Fully mobile-friendly layout using Tailwind CSS.  
✅ **Firebase Authentication** – Email/Password, Google Sign-In, and Forgot Password.  
✅ **Protected Routes** – Only logged-in users can access Plant Details and Profile pages.  
✅ **Dynamic Data** – Plants loaded from local JSON file.  
✅ **Toast Notifications** – For all actions (login, signup, booking, etc.).  
✅ **Update Profile** – Change name and photo in real-time using Firebase `updateProfile()`.

---

## 🧩 Core Pages & Sections

### 🏡 Home Page

- **Hero Section:** Swiper/Framer Motion slider with plant visuals & slogans.
- **Top Rated Indoor Plants:** Cards from JSON (name, price, rating, button).
- **Plant Care Tips:** Watering, sunlight & fertilizing info.
- **Meet Our Green Experts:** Expert profiles with image & specialization.
- **Extra Section:** “Eco Decor Ideas” (optional creative section).

### 🌿 Plant Details Page (Protected)

- Shows full plant info from JSON.
- Includes **“Book Consultation”** form (name, email, button).
- On submit → success toast + form clear + navigate back to Plants page.

### 👤 Authentication

- **Login & Signup:** Firebase auth with validations + Google Sign-In.
- **Password Validation:**
  - ≥6 chars
  - 1 Uppercase
  - 1 Lowercase
- **Forgot Password:** Sends password reset email.

### 🪴 My Profile Page

- Shows user info (name, email, photo).
- Includes **“Update Profile”** button with real-time update.

---

## 🔧 Tech Stack

- **Frontend:** React + React Router + Tailwind CSS + DaisyUI
- **Auth:** Firebase Authentication
- **UI Enhancements:** React Toastify, Swiper / Framer Motion
- **Hosting:** Firebase Hosting

---

## 🚀 Live & Source Links

**🔗 Live Link:** [Your Firebase Live URL Here]  
**💻 GitHub Repo:** [Your GitHub Repository Link Here]

---

## 👨‍💻 Developer

**Name:** Nazmul  
Frontend Developer | React & WordPress Enthusiast
