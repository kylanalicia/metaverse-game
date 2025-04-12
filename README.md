# 🕹️ Metaverse Game Backend

Welcome to the backend of a real-time **Metaverse Game** – where users can sign up, join spaces, choose avatars, and interact with each other in real-time!

This project powers the server-side logic, user authentication, metadata management, and real-time communication for a multiplayer metaverse environment.

---

## 🚀 Features

- 🧑‍🚀 User signup/signin with JWT authentication
- 🖼️ Avatar creation and metadata updates
- 🏠 Space creation and real-time joining
- 👥 WebSocket-powered real-time interactions
- ✅ Protected routes with role-based access (e.g., admin/user)
- 🧪 Fully tested with Jest – including edge cases
- 🔒 Authorization on sensitive actions (e.g., deleting elements)

---

## 🛠️ Tech Stack

| Tech              | Purpose                      |
|-------------------|------------------------------|
| **Node.js**       | Backend runtime              |
| **Express.js**    | Server framework             |
| **Prisma**        | ORM for database management  |
| **PostgreSQL**    | Database                     |
| **Zod**           | Schema validation            |
| **WebSockets**    | Real-time user communication |
| **Jest**          | Testing framework            |
| **Docker**        | Containerization             |

---

## 📦 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/kylanalicia/metaverse-game
cd metaverse

2. Install Dependencies
bash
Copy
Edit
npm install

3. Setup Environment Variables
Create an .env file in the root with the following:

DATABASE_URL=postgresql://user:password@localhost:5432/metaverse_db
JWT_SECRET=your_jwt_secret
PORT=8000

4. Run Migrations
npx prisma generate

5. Start the Server
npm start
Server will run on http://localhost:3001

🧪 Running Tests
npm test
All endpoints and WebSocket interactions are covered with Jest tests.

📂 API Endpoints Overview
Method	Endpoint	Description
POST	/api/v1/signup	Register a new user
POST	/api/v1/signin	Authenticate user
POST	/api/v1/user/metadata	Update user metadata with avatar ID
POST	/api/v1/admin/avatar	Add a new avatar (admin only)
DELETE	/api/v1/space/element	Delete element from space (creator)

🔄 WebSocket Events
Event Type	Description
join	Join a space
space-joined	Acknowledgement of join
user-joined	Broadcast when a user joins

![Tests Passing] (https://github.com/kylanalicia/metaverse-game/blob/main/tests-passed.png?raw=true)

👩🏽‍💻 Author
Alicia Kimani
Aspiring Software & Cloud Engineer
aliciakimani.ky@gmail.com

🌐 License
This project is licensed under the MIT License. See the LICENSE file for details.
