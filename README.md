# 🧼 Realtime Whiteboard

A collaborative **real-time whiteboard application** that allows multiple users to draw, edit and interact on a shared canvas simultaneously. Built with **React + TypeScript frontend**m, **Express + Socket.IO backend** and **Keycloak** for authentication.

This project demonstrates real-time communication, session-based collaboration and secure authentication using modern web technologies.

---

## ✨ Highlights

- Smooth real-time drawing and syncing across users
- Session-based collaboration using unique session IDs
- Live cursor tracking for all participants
- Undo/redo support and multiple drawing tools
- Secure authentication with Keycloak (OIDC)
- Clean separation of frontend, backend, and auth infrastructure

---

## 🚀 Features

### 🎨 Whiteboard & Collaboration
- **Realtime drawing** using `fabric.js`
- **Shared canvas state** synced via Socket.IO
- **Live cursors** showing other users’ movements
- **Undo / Redo** for drawing actions
- **Erase tools** (white brush)
- **Color picker & brush size controls**
- **Add text elements**
- **Download canvas** as PNG

### 👥 Sessions
- Users collaborate inside a **session (room)**
- Drawing, clearing, and cursor updates are scoped per session
- New participants receive the current canvas state automatically

### 🔐 Authentication
- Login, logout, and registration handled by **Keycloak**
- Frontend authentication via `keycloak-js`
- Backend route protection using `keycloak-connect`

---

## 🛠️ Tech Stack

### Frontend
- React + TypeScript (Vite)
- `fabric` – canvas rendering and manipulation
- `socket.io-client` – real-time communication
- `keycloak-js` – authentication
- Bootstrap & Bootstrap Icons – UI styling

### Backend
- Node.js + Express
- `socket.io` – realtime server
- `keycloak-connect` + `express-session` – route protection

### Authentication / Infrastructure
- Keycloak (OIDC)
- Docker + Docker Compose for local Keycloak setup

---

## 📁 Project Structure

```

```
---

## ▶️ UI Screenshots



---

## 📦 Prerequisites

- **Node.js** (LTS recommended)
- **npm**
- **Docker & Docker Compose** (for running Keycloak locally)

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the repository

```bash
git clone <your-repo-url> realtime-whiteboard
cd realtime-whiteboard
```

---

### 2️⃣ Install dependencies

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

---

### 3️⃣ Start Keycloak (Authentication Server)

```bash
cd ../keycloak
docker compose up -d
```

Keycloak will be available at:

```
http://localhost:8080
```

Configure the following in the Keycloak Admin Console:

- **Realm**: `whiteboard-realm`
- **Client ID**: `whiteboard-client`
- **Access type**: Public
- **Valid redirect URIs**:
  ```
  http://localhost:5173/*
  ```
- **Web origins**:
  ```
  http://localhost:5173
  ```

---

## ▶️ Running the App (Development)

### Start the backend

```bash
cd backend
npm run dev
```

Runs on:
```
http://localhost:3001
```

---

### Start the frontend

```bash
cd frontend
npm run dev
```

Runs on:
```
http://localhost:5173
```

---

## 🧭 Usage Flow

1. Open `http://localhost:5173` in your browser
2. You will be redirected to **Keycloak** for login
3. After authentication:
   - Create a **new session** (random session ID)
   - Or **join an existing session**
4. Inside a session:
   - Draw, erase, add text, and collaborate in real time
   - See other users’ cursors live
   - Download the canvas as an image
5. Use the **Logout** button to end the session via Keycloak

---

## 🔌 Backend API & Socket Events (Overview)

### HTTP Routes
- `GET /protected` – Example Keycloak-protected route
- `GET /logout` – Logs out via Keycloak and redirects to frontend

### Socket Events
- `join-session` / `leave-session` – Session (room) management
- `draw` – Broadcast drawing paths
- `clear` – Clear canvas for a session
- `request-canvas` / `send-canvas` / `canvas-data` – Canvas sync for new users
- `cursor-move` – Live cursor updates
- `user-disconnected` – Cleanup on disconnect

---

## 📝 Notes & Customization

- Update environment-specific URLs in:
  - `backend/src/config/keycloack.ts`
  - `backend/src/server.ts`
  - `frontend/src/utils/keycloak.ts`
- Canvas tools, defaults, and behavior can be adjusted in:
  - `frontend/src/components/Whiteboard.tsx`

---

## 🔮 Future Improvements

- Export canvas as **PDF**
- In-session **chat**
- **Multi-page** whiteboards
- Drag-to-erase / brush eraser
- Role-based permissions (viewer / editor)
- Persistent sessions with database storage

---
