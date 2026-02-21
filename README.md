                                                              🩺 PRESCRIBEME 

A full-stack doctor appointment booking application with role-based access control.
The platform supports three roles — User, Doctor, and Admin — enabling seamless appointment management, authentication, and administration.

🚀 Project Overview

This application allows users to browse doctors and book appointments, doctors to manage their schedules and appointments, and admins to oversee the entire system.
The system uses JWT-based authentication to ensure secure access and role separation.

👥 User Roles
👤 User

Register and log in securely

Browse available doctors

Book appointments

View appointment history

🧑‍⚕️ Doctor

Secure login

View assigned appointments

Manage availability and appointment status

🛠 Admin

Admin dashboard access

Manage users and doctors

Monitor appointments

System-level control

🛠 Tech Stack
Frontend

React.js

Tailwind CSS (for UI styling)

Backend

Node.js

Express.js

Database

MongoDB

Authentication & Security

JWT (JSON Web Token) Authentication

Role-based authorization

🔐 Authentication Flow

User logs in → JWT token is generated

Token is stored securely on the client

Protected routes validate token and role

Unauthorized access is restricted

📁 Project Structure (High-Level)
client/
  ├─ src/
  ├─ components/
  ├─ pages/
  └─ assets/

server/
  ├─ controllers/
  ├─ routes/
  ├─ models/
  ├─ middleware/
  └─ config/
  
⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/your-username/doctor-appointment-app.git
2️⃣ Install Dependencies
Frontend
cd client
npm install
Backend
cd server
npm install
3️⃣ Environment Variables

Create a .env file in the server directory:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
4️⃣ Run the Application
Backend
npm run server
Frontend
npm start
📌 Features Summary

Role-based authentication (User / Doctor / Admin)

Secure JWT authentication

Appointment booking system

Admin management panel

Clean and responsive UI

RESTful API architecture

🧪 Future Enhancements

Payment gateway integration

Email/SMS notifications

Appointment reminders

Doctor ratings & reviews

Advanced admin analytics
