# Aahan Bansal — Portfolio

Full-stack MERN portfolio for Aahan Bansal, Systems & IoT Engineer.

## Live

- **Frontend:** [Deploy on Vercel]
- **Backend:** [Deploy on Render]

## Stack

- React.js + Vite + Framer Motion (frontend)
- Node.js + Express.js (backend)
- MongoDB + Mongoose (contact form)

## Local Setup

### Prerequisites
- Node.js 18+
- MongoDB Atlas URI

### Server

```bash
cd server
npm install
# Create .env with MONGO_URI=<your_atlas_uri> and PORT=5000
npm start
```

### Client

```bash
cd client
npm install
# Create .env with VITE_API_URL=http://localhost:5000
npm run dev
```

## API Routes

| Method | Route | Description |
|--------|-------|-------------|
| POST | `/api/contact` | Save contact form to MongoDB |
| GET | `/api/download/pdf` | Download resume PDF |
| GET | `/api/download/docx` | Download resume DOCX |

## Sections

1. **HERO** — Name, typewriter role, CV download CTAs
2. **01.ABOUT_ME** — Bio, photo, status chips
3. **02.SKILL_MATRIX** — Circular progress charts by category
4. **03.REPO_LOG** — Project cards with tech badges & GitHub links
5. **04.SYSTEM_UPGRADES** — Education timeline
6. **05.CERT_STORAGE** — Certifications & achievements
7. **06.CONNECT_CLI** — Contact form + direct links

## Environment Variables

**Server `.env`**
```
MONGO_URI=mongodb+srv://...
PORT=5000
CLIENT_URL=https://your-vercel-url.vercel.app
```

**Client `.env`**
```
VITE_API_URL=https://your-render-url.onrender.com
```
