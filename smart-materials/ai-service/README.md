# Smart Materials - AI Service

Python FastAPI service for material classification.

## Setup

1. Create virtual environment (recommended):
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Run the service:
```bash
python main.py
```

The service will start on http://localhost:8000

## API Endpoint

### POST /predict
Upload an image to get material prediction.

**Request:**
- Method: POST
- Content-Type: multipart/form-data
- Body: file (image file)

**Response:**
```json
{
  "material": "Metals",
  "confidence": 0.91
}
```

## Mock vs Production

Currently uses mock predictions for demonstration.

### To integrate a real ML model:

1. Train your material classification model
2. Save model file (e.g., `material_classifier.h5`)
3. Load model at startup in `main.py`
4. Replace `mock_predict()` with real inference logic

See comments in `main.py` for detailed integration steps.

## Architecture

```
ai-service/
├── main.py              # FastAPI application
├── requirements.txt     # Python dependencies
└── README.md           # This file
```

## Technologies

- FastAPI: Modern web framework
- Uvicorn: ASGI server
- Pillow: Image processing
- (Future) TensorFlow/PyTorch for ML model
