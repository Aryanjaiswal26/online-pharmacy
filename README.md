💊 Online Pharmacy Web App

An Online Pharmacy Management System built with Node.js, Express, MongoDB, and EJS.
It supports user authentication, session management, and pharmacy pages (Home, Contact, About, Sales, Payment, etc.).

🚀 Features

User authentication with bcrypt password hashing

Session-based login/logout using express-session

Protected routes (About, Sales, Payment, Success pages require login)

Bootstrap-based UI with responsive design

Contact page with:

Emergency alert

Interactive form with success message

Google Maps integration

Pharmacy pages:

Home

About Us

Contact Us

Sales (Shop)

Payment & Success Payment

🛠️ Tech Stack

Backend: Node.js, Express.js

Database: MongoDB + Mongoose

Authentication: bcrypt + express-session

Frontend: EJS templates, Bootstrap 5

Styling: Custom CSS + Bootstrap Icons

📂 Project Structure
project-root/
│── modals/
│   └── userModal.js        # User schema (Mongoose)
│── public/
│   └── stylesheet/         # Custom CSS files
│── views/
│   ├── Auth/               # Login & Register views
│   └── pharmacy/           # Pharmacy-related EJS templates
│── server.js               # Main Express app

⚡ Installation & Setup

Clone the repository:

git clone https://github.com/your-username/online-pharmacy.git
cd online-pharmacy


Install dependencies:

npm install


Start MongoDB (locally or via MongoDB Atlas).

Run the app:

node server.js


Open in browser:

http://localhost:3000

🔑 Authentication Flow

Register → /register

Login → /login

Logout → /logout

Logged-in user info stored in session (req.session.user)

Protected routes redirect unauthenticated users to /login

📌 TODO / Future Enhancements

✅ Save contact form submissions to database

✅ Display logged-in user’s name in navbar

⏳ Add Google Maps embed instead of placeholder

⏳ Add product catalog & shopping cart

⏳ Email notifications
