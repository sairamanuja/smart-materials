# Easy Materials Frontend

React application with Vite for the Easy Materials platform.

## Features

- 📚 Static educational content about materials
- 📊 Interactive pie chart visualization
- 📸 Image upload for AI material scanning
- 💬 Feedback form
- 🎨 Modern UI with Tailwind CSS
- 📱 Fully responsive design

## Setup

1. Install dependencies:
```bash
npm install
```

2. Copy environment file:
```bash
cp .env.example .env
```

3. Start development server:
```bash
npm run dev
```

Frontend will run on http://localhost:5173

## Build for Production

```bash
npm run build
```

Built files will be in `dist/` directory.

## Project Structure

```
frontend/
├── src/
│   ├── components/           # React components
│   │   ├── Header.jsx       # App header
│   │   ├── NewsBanner.jsx   # News section
│   │   ├── MaterialsSection.jsx # Materials info
│   │   ├── AIScanner.jsx    # Image upload & scan
│   │   ├── FeedbackForm.jsx # Contact form
│   │   └── Footer.jsx       # App footer
│   ├── data/
│   │   └── materialsData.js # Static content
│   ├── services/
│   │   └── api.js          # Backend API calls
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── public/                  # Static assets
├── index.html              # HTML template
└── package.json            # Dependencies
```

## Technologies

- **React 18** - UI library
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first CSS
- **Recharts** - Chart visualization
- **Axios** - HTTP client

## Static Content

All materials, properties, applications, and news are hard-coded in `/src/data/materialsData.js`. No backend API calls for this content.

## Backend API Integration

Only two backend endpoints are used:
- `POST /api/scan` - Material scanning
- `POST /api/feedback` - Feedback submission

Configure backend URL in `.env`:
```
VITE_API_URL=http://localhost:5000
```
