# OctoFit Tracker

A modern multi-tier application for fitness tracking.

## Project Structure

```
octofit-tracker/
├── frontend/          # React 19 + Vite (Port: 5173)
│   ├── src/
│   ├── package.json
│   └── vite.config.ts
└── backend/           # Node.js + Express + TypeScript (Port: 8000)
    ├── src/
    ├── package.json
    ├── tsconfig.json
    └── .env
```

## Ports

- **Frontend**: 5173
- **Backend**: 8000
- **MongoDB**: 27017

## Getting Started

### Frontend Setup
```bash
cd octofit-tracker/frontend
npm install
npm run dev
```

### Backend Setup
```bash
cd octofit-tracker/backend
npm install
npm run dev
```

### MongoDB
Ensure MongoDB is running on port 27017.

## Technologies

- **Frontend**: React 19, Vite, TypeScript
- **Backend**: Node.js, Express, TypeScript
- **Database**: MongoDB with Mongoose
