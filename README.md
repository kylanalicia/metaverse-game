# 🕹️ Metaverse Game Backend
Welcome to the backend of a real-time **Metaverse Game** – where users can sign up, join spaces, choose avatars, and interact with each other in real-time!

This project powers the server-side logic, user authentication, metadata management, and real-time communication for a multiplayer metaverse environment.

---

## Features

- 🧑‍🚀 User signup/signin with JWT authentication  
- 🖼️ Avatar creation and metadata updates  
- 🏠 Space creation and real-time joining  
- 👥 WebSocket-powered real-time interactions  
- ✅ Protected routes with role-based access (e.g., admin/user)  
- 🧪 Fully tested with Jest – including edge cases  
- 🔒 Authorization on sensitive actions (e.g., deleting elements)  

---

## Tech Stack
| Tech           | Purpose                      |
|----------------|------------------------------|
| **Node.js**    | Backend runtime              |
| **Express.js** | Server framework             |
| **Prisma**     | ORM for database management  |
| **PostgreSQL** | Database                     |
| **Zod**        | Schema validation            |
| **WebSockets** | Real-time communication      |
| **Jest**       | Testing framework            |
| **Docker**     | Containerization             |

---
## Setup Instractions
### 1. Clone the Repository
git clone https://github.com/kylanalicia/metaverse-game
cd metaverse-game

### 2. Install Dependencies
npm install

### 3. Setup Environment Variables
Create a .env file in the root directory with the following:
DATABASE_URL=postgresql://user:password@localhost:5432/metaverse_db
JWT_SECRET=your_jwt_secret
PORT=8000
### 4. Run Migrations
npx prisma generate

### 5. Start the Server
npm start
Server will run on: http://localhost:3001

## 🧪 Running Tests
npm test

## 📸 Screenshot
![Tests Passing](https://github.com/kylanalicia/metaverse-game/blob/main/tests-passed.png?raw=true)

## 👩🏽‍💻 Author
Alicia Kimani
Aspiring Software & Cloud Engineer
📧 aliciakimani.ky@gmail.com

## 🌐 License
This project is licensed under the MIT License. See the LICENSE file for details.


