# Smart Materials - Full Stack Application

A modern full-stack application for AI-powered material scanning and education.

## Architecture

```
smart-materials/
├── frontend/          # React + Vite + Tailwind CSS
├── backend/           # Node.js + Express API
└── ai-service/        # Python + FastAPI AI Service
```

## Tech Stack

### Frontend
- React with Vite
- Tailwind CSS for styling
- Recharts for data visualization
- Axios for API calls

### Backend
- Node.js + Express
- Multer for file uploads
- CORS enabled
- Express Rate Limit

### AI Service
- Python 3.8+
- FastAPI
- Pillow for image processing
- Mock ML model (ready for real model)

## Setup Instructions

### 1. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on: http://localhost:5173

### 2. Backend Setup

```bash
cd backend
npm install
npm start
```

Backend runs on: http://localhost:5000

### 3. AI Service Setup

```bash
cd ai-service
pip install -r requirements.txt
python main.py
```

AI Service runs on: http://localhost:8000

## API Endpoints

### Backend (Node.js)
- `POST /api/scan` - Upload image for material detection
- `POST /api/feedback` - Submit feedback form

### AI Service (Python)
- `POST /predict` - Predict material from image

## Integration Flow

1. User uploads image in Frontend
2. Frontend sends image to Backend (`/api/scan`)
3. Backend forwards to AI Service (`/predict`)
4. AI Service returns prediction
5. Backend sends result to Frontend
6. Frontend displays material and confidence

## Features

- ✅ Static educational content (materials, properties, applications)
- ✅ Interactive pie chart visualization
- ✅ Camera/Image upload for scanning
- ✅ AI-powered material detection
- ✅ Feedback form
- ✅ Responsive design
- ✅ Error handling
- ✅ Rate limiting

## Environment Variables

Check `.env.example` files in each service directory.

## Notes

- Static content (materials, news) is hard-coded in frontend
- Backend focuses only on scanning and feedback
- AI service uses mock predictions (easily replaceable with real ML model)
- Clean separation of concerns for easy scalability
