# Easy Materials - AI-Powered Material Scanner

A modern full-stack application for AI-powered material identification and education.

## 🏗️ Architecture

```
smart-materials/
├── frontend/          # React + Vite + Tailwind CSS
└── ai-service/        # Python + FastAPI Backend (handles everything)
```

## 🛠️ Tech Stack

### Frontend
- React 18 with Vite
- Tailwind CSS for styling
- Recharts for data visualization
- Axios for API calls

### Backend (Python)
- Python 3.8+
- FastAPI
- Groq API (Llama 4 Scout Vision model)
- Pillow for image processing
- Pydantic for validation

## 🚀 Quick Start

### 1. Backend Setup

```bash
cd ai-service

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Configure environment
cp .env.example .env
# Edit .env and add your GROQ_API_KEY

# Run server
python main.py
```

Backend runs on: http://localhost:8000

### 2. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Configure environment (optional)
cp .env.example .env
# Edit .env if backend is on different URL

# Run development server
npm run dev
```

Frontend runs on: http://localhost:5173

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/scan` | Upload image for material detection |
| POST | `/api/feedback` | Submit feedback form |
| GET | `/api/feedback` | Get all feedback (admin) |
| GET | `/health` | Health check endpoint |
| GET | `/` | Service info |

## 🌐 Deployment

### Backend Deployment (Render, Railway, Heroku, etc.)

1. **Set Environment Variables:**
   - `GROQ_API_KEY` - Your Groq API key (required)
   - `PORT` - Port number (auto-set by most platforms)
   - `ALLOWED_ORIGINS` - Frontend URL (e.g., `https://yourdomain.com`)

2. **Deploy:**
   - Push `ai-service/` folder to your hosting platform
   - The `Procfile` is included for Heroku/Railway
   - Start command: `uvicorn main:app --host 0.0.0.0 --port $PORT`

### Frontend Deployment (Vercel, Netlify, etc.)

1. **Set Environment Variables:**
   - `VITE_API_URL` - Your deployed backend URL

2. **Build & Deploy:**
   ```bash
   cd frontend
   npm run build
   ```
   - Deploy the `dist/` folder

## ✨ Features

- ✅ AI-powered material identification (any material type)
- ✅ Material properties and applications display
- ✅ Educational content (materials, properties, uses)
- ✅ Interactive pie chart visualization
- ✅ Image upload for scanning
- ✅ Feedback form
- ✅ Responsive design
- ✅ Health check endpoint for monitoring
- ✅ Production-ready CORS configuration

## 🔑 Environment Variables

### Backend (`ai-service/.env`)
```env
GROQ_API_KEY=your_groq_api_key_here
PORT=8000
HOST=0.0.0.0
ALLOWED_ORIGINS=http://localhost:5173,https://yourdomain.com
```

### Frontend (`frontend/.env`)
```env
VITE_API_URL=http://localhost:8000
```

## 📝 Getting API Keys

- **Groq API Key:** Get from [console.groq.com/keys](https://console.groq.com/keys)

## 📄 License

MIT

- Static content (materials, news) is hard-coded in frontend
- Backend focuses only on scanning and feedback
- AI service uses mock predictions (easily replaceable with real ML model)
- Clean separation of concerns for easy scalability
