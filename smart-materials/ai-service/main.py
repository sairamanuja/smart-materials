from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from PIL import Image
import io
import os
import base64
import json
from datetime import datetime
from groq import Groq
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = FastAPI(
    title="Easy Materials API",
    description="AI-powered material identification service",
    version="1.0.0"
)

# Configure Groq API
api_key = os.getenv("GROQ_API_KEY")
client = None

if api_key:
    client = Groq(api_key=api_key)
    print("✅ Groq API configured successfully")
else:
    print("⚠️  Warning: GROQ_API_KEY not found. Set it in .env file")

# CORS middleware - configure allowed origins from environment
allowed_origins = os.getenv("ALLOWED_ORIGINS", "http://localhost:5173,http://localhost:3000,https://smart-materials-iota.vercel.app").split(",")
# In production, set ALLOWED_ORIGINS to your frontend domain

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)

# In-memory feedback storage
feedback_store = []

# Pydantic model for feedback
class FeedbackRequest(BaseModel):
    name: str
    email: str
    message: str

def image_to_base64(image: Image.Image) -> str:
    """Convert PIL Image to base64 string"""
    buffered = io.BytesIO()
    image.save(buffered, format="JPEG")
    return base64.b64encode(buffered.getvalue()).decode("utf-8")

import re

# Material properties database
MATERIAL_PROPERTIES = {
    "paper": {
        "category": "Organic",
        "properties": ["Lightweight", "Biodegradable", "Recyclable", "Flexible", "Absorbent"],
        "applications": ["Packaging", "Writing", "Printing", "Crafts", "Insulation"]
    },
    "plastic": {
        "category": "Polymer",
        "properties": ["Lightweight", "Durable", "Moldable", "Water-resistant", "Insulating"],
        "applications": ["Packaging", "Consumer goods", "Construction", "Automotive", "Electronics"]
    },
    "plastics": {
        "category": "Polymer",
        "properties": ["Lightweight", "Durable", "Moldable", "Water-resistant", "Insulating"],
        "applications": ["Packaging", "Consumer goods", "Construction", "Automotive", "Electronics"]
    },
    "metal": {
        "category": "Metallic",
        "properties": ["Conductive", "Strong", "Malleable", "Ductile", "Lustrous"],
        "applications": ["Construction", "Automotive", "Aerospace", "Electronics", "Machinery"]
    },
    "metals": {
        "category": "Metallic",
        "properties": ["Conductive", "Strong", "Malleable", "Ductile", "Lustrous"],
        "applications": ["Construction", "Automotive", "Aerospace", "Electronics", "Machinery"]
    },
    "glass": {
        "category": "Ceramic",
        "properties": ["Transparent", "Brittle", "Heat-resistant", "Chemical-resistant", "Recyclable"],
        "applications": ["Windows", "Containers", "Optics", "Electronics", "Art"]
    },
    "ceramic": {
        "category": "Ceramic",
        "properties": ["Hard", "Brittle", "Heat-resistant", "Chemical-resistant", "Insulating"],
        "applications": ["Pottery", "Tiles", "Electronics", "Medical implants", "Cutting tools"]
    },
    "ceramics": {
        "category": "Ceramic",
        "properties": ["Hard", "Brittle", "Heat-resistant", "Chemical-resistant", "Insulating"],
        "applications": ["Pottery", "Tiles", "Electronics", "Medical implants", "Cutting tools"]
    },
    "wood": {
        "category": "Organic",
        "properties": ["Natural", "Renewable", "Strong", "Lightweight", "Biodegradable"],
        "applications": ["Construction", "Furniture", "Paper production", "Fuel", "Art"]
    },
    "fabric": {
        "category": "Textile",
        "properties": ["Flexible", "Breathable", "Soft", "Absorbent", "Durable"],
        "applications": ["Clothing", "Upholstery", "Industrial filters", "Medical textiles", "Home furnishing"]
    },
    "textile": {
        "category": "Textile",
        "properties": ["Flexible", "Breathable", "Soft", "Absorbent", "Durable"],
        "applications": ["Clothing", "Upholstery", "Industrial filters", "Medical textiles", "Home furnishing"]
    },
    "fibres": {
        "category": "Composite/Textile",
        "properties": ["High strength-to-weight", "Flexible", "Durable", "Woven pattern", "Versatile"],
        "applications": ["Aerospace", "Automotive", "Sports equipment", "Construction", "Textiles"]
    },
    "carbon fiber": {
        "category": "Composite",
        "properties": ["Extremely strong", "Lightweight", "Stiff", "Corrosion-resistant", "High-performance"],
        "applications": ["Aerospace", "Automotive", "Sports equipment", "Wind turbines", "Medical devices"]
    },
    "composites": {
        "category": "Composite",
        "properties": ["High strength-to-weight", "Customizable", "Corrosion-resistant", "Fatigue-resistant", "Design flexibility"],
        "applications": ["Aerospace", "Automotive", "Marine", "Sports equipment", "Construction"]
    },
    "rubber": {
        "category": "Elastomer",
        "properties": ["Elastic", "Flexible", "Water-resistant", "Shock-absorbing", "Durable"],
        "applications": ["Tires", "Seals", "Footwear", "Industrial belts", "Sports equipment"]
    },
    "leather": {
        "category": "Organic",
        "properties": ["Durable", "Flexible", "Breathable", "Natural", "Ages well"],
        "applications": ["Footwear", "Bags", "Furniture", "Clothing", "Accessories"]
    },
    "concrete": {
        "category": "Composite",
        "properties": ["Strong in compression", "Durable", "Fire-resistant", "Moldable", "Heavy"],
        "applications": ["Buildings", "Bridges", "Roads", "Dams", "Infrastructure"]
    },
    "stone": {
        "category": "Natural",
        "properties": ["Hard", "Durable", "Heavy", "Natural beauty", "Weather-resistant"],
        "applications": ["Construction", "Sculpture", "Flooring", "Countertops", "Landscaping"]
    },
    "foam": {
        "category": "Polymer",
        "properties": ["Lightweight", "Cushioning", "Insulating", "Compressible", "Versatile"],
        "applications": ["Packaging", "Insulation", "Furniture", "Automotive", "Sports equipment"]
    },
    "cardboard": {
        "category": "Organic",
        "properties": ["Lightweight", "Recyclable", "Biodegradable", "Inexpensive", "Sturdy"],
        "applications": ["Packaging", "Shipping boxes", "Displays", "Crafts", "Storage"]
    },
    "aluminum": {
        "category": "Metal",
        "properties": ["Lightweight", "Corrosion-resistant", "Conductive", "Recyclable", "Malleable"],
        "applications": ["Aerospace", "Packaging", "Construction", "Transportation", "Electronics"]
    },
    "steel": {
        "category": "Metal",
        "properties": ["Strong", "Durable", "Recyclable", "Magnetic", "Versatile"],
        "applications": ["Construction", "Automotive", "Appliances", "Tools", "Infrastructure"]
    },
    "copper": {
        "category": "Metal",
        "properties": ["Excellent conductor", "Antimicrobial", "Corrosion-resistant", "Malleable", "Ductile"],
        "applications": ["Electrical wiring", "Plumbing", "Electronics", "Roofing", "Coins"]
    },
    "silk": {
        "category": "Natural Textile",
        "properties": ["Luxurious", "Strong", "Lightweight", "Breathable", "Hypoallergenic"],
        "applications": ["Clothing", "Bedding", "Upholstery", "Medical sutures", "Parachutes"]
    },
    "cotton": {
        "category": "Natural Textile",
        "properties": ["Soft", "Breathable", "Absorbent", "Hypoallergenic", "Biodegradable"],
        "applications": ["Clothing", "Bedding", "Medical supplies", "Industrial fabrics", "Home textiles"]
    },
    "wool": {
        "category": "Natural Textile",
        "properties": ["Insulating", "Moisture-wicking", "Fire-resistant", "Elastic", "Renewable"],
        "applications": ["Clothing", "Carpets", "Insulation", "Upholstery", "Blankets"]
    }
}

def get_material_properties(material_name: str) -> dict:
    """Get properties for a material, with fallback for unknown materials"""
    material_lower = material_name.lower().strip()
    
    # Direct match
    if material_lower in MATERIAL_PROPERTIES:
        return MATERIAL_PROPERTIES[material_lower]
    
    # Partial match
    for key, props in MATERIAL_PROPERTIES.items():
        if key in material_lower or material_lower in key:
            return props
    
    # Default properties for unknown materials
    return {
        "category": "Unknown",
        "properties": ["Material identified", "Properties may vary", "Further analysis recommended"],
        "applications": ["Various applications possible", "Consult material specifications"]
    }

def extract_json_from_text(text: str) -> dict:
    """Extract JSON object from text, handling multiple JSON objects or malformed responses"""
    # Remove markdown code blocks
    if "```json" in text:
        text = text.split("```json")[1].split("```")[0].strip()
    elif "```" in text:
        parts = text.split("```")
        if len(parts) >= 2:
            text = parts[1].strip()
    
    # Try to find JSON object with regex
    json_pattern = r'\{[^{}]*"material"[^{}]*\}'
    matches = re.findall(json_pattern, text, re.IGNORECASE)
    
    if matches:
        # Take the first valid JSON match
        for match in matches:
            try:
                return json.loads(match)
            except json.JSONDecodeError:
                continue
    
    # Try parsing the whole text as JSON
    try:
        # Handle multiple lines - take first line that looks like JSON
        lines = text.strip().split('\n')
        for line in lines:
            line = line.strip()
            if line.startswith('{') and line.endswith('}'):
                try:
                    return json.loads(line)
                except json.JSONDecodeError:
                    continue
        
        # Last resort - try the whole text
        return json.loads(text)
    except json.JSONDecodeError:
        pass
    
    # If all else fails, return None
    return None

def analyze_material_with_groq(image: Image.Image) -> dict:
    """
    Analyze material using Groq Vision API (Llama Vision model)
    """
    try:
        # Convert image to base64
        base64_image = image_to_base64(image)
        
        prompt = """Analyze this image and identify what material or substance is shown.

You can identify ANY type of material - be specific! Examples include but are not limited to:
- Paper, Cardboard, Notebook paper
- Plastics (PVC, Polyethylene, Acrylic, etc.)
- Metals (Steel, Aluminum, Copper, Iron, Gold, etc.)
- Fabrics/Textiles (Cotton, Silk, Wool, Polyester, etc.)
- Wood, Bamboo, Cork
- Glass, Crystal
- Ceramics, Porcelain, Tiles
- Rubber, Silicone
- Leather, Suede
- Stone, Marble, Granite
- Composites, Carbon Fiber, Fiberglass
- Foam, Sponge
- Concrete, Cement
- And many more...

Analyze carefully:
- Surface texture and finish
- Color, pattern, and appearance
- Visible structure and composition
- Any text or labels that might indicate material type

Respond with ONLY a single JSON object (no extra text, no multiple objects):
{"material": "specific material name", "confidence": confidence_value}

Where confidence_value is a number between 0.0 and 1.0.

Example responses:
{"material": "Paper", "confidence": 0.95}
{"material": "Carbon Fiber", "confidence": 0.88}
{"material": "Cotton Fabric", "confidence": 0.92}
"""
        
        # Use Llama 4 Scout Vision model
        response = client.chat.completions.create(
            model="meta-llama/llama-4-scout-17b-16e-instruct",
            messages=[
                {
                    "role": "user",
                    "content": [
                        {
                            "type": "text",
                            "text": prompt
                        },
                        {
                            "type": "image_url",
                            "image_url": {
                                "url": f"data:image/jpeg;base64,{base64_image}"
                            }
                        }
                    ]
                }
            ],
            max_tokens=150,
            temperature=0.1
        )
        
        result_text = response.choices[0].message.content.strip()
        print(f"📝 Groq response: {result_text}")
        
        # Extract JSON from response
        result = extract_json_from_text(result_text)
        
        if result is None:
            print(f"⚠️ Could not parse JSON, using fallback")
            # Try to extract material name from text
            material = "Unknown Material"
            if "paper" in result_text.lower():
                material = "Paper"
            elif "plastic" in result_text.lower():
                material = "Plastic"
            elif "metal" in result_text.lower():
                material = "Metal"
            elif "fabric" in result_text.lower() or "textile" in result_text.lower():
                material = "Fabric"
            elif "carbon" in result_text.lower():
                material = "Carbon Fiber"
            result = {"material": material, "confidence": 0.7}
        
        material = result.get("material", "Unknown")
        confidence = float(result.get("confidence", 0.5))
        
        # Get material properties
        properties = get_material_properties(material)
        
        print(f"✅ Identified: {material} ({confidence}) - Category: {properties['category']}")
        
        return {
            "material": material,
            "confidence": round(confidence, 2),
            "category": properties["category"],
            "properties": properties["properties"],
            "applications": properties["applications"]
        }
        
    except Exception as e:
        print(f"❌ Error with Groq API: {e}")
        raise HTTPException(status_code=500, detail=f"Groq API error: {str(e)}")

@app.get("/")
async def root():
    return {
        "service": "Easy Materials API",
        "status": "running",
        "provider": "Groq",
        "model": "meta-llama/llama-4-scout-17b-16e-instruct",
        "configured": client is not None
    }

# ============ SCAN ENDPOINTS ============

@app.post("/api/scan")
async def scan_material(image: UploadFile = File(...)):
    """
    Scan material from uploaded image - matches frontend expected endpoint
    """
    return await predict(image)

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    """
    Predict material type from uploaded image using Groq Vision API
    """
    if not client:
        raise HTTPException(
            status_code=503, 
            detail="Groq API key not configured. Please set GROQ_API_KEY in .env file"
        )
    
    try:
        # Read and process image
        image_data = await file.read()
        image = Image.open(io.BytesIO(image_data))
        
        # Convert to RGB if necessary
        if image.mode != 'RGB':
            image = image.convert('RGB')


        
        # Resize if too large (Groq has limits)
        max_size = 1024
        if image.width > max_size or image.height > max_size:
            image.thumbnail((max_size, max_size), Image.Resampling.LANCZOS)
        
        # Analyze material using Groq
        result = analyze_material_with_groq(image)
        
        return {
            "success": True,
            "material": result["material"],
            "prediction": result["material"],
            "confidence": result["confidence"],
            "category": result.get("category", "Unknown"),
            "properties": result.get("properties", []),
            "applications": result.get("applications", []),
            "timestamp": datetime.now().isoformat()
        }
    except HTTPException:
        raise
    except Exception as e:
        print(f"❌ Error in prediction: {e}")
        raise HTTPException(status_code=500, detail=str(e))

# ============ FEEDBACK ENDPOINTS ============

@app.post("/api/feedback")
async def submit_feedback(feedback: FeedbackRequest):
    """
    Submit user feedback
    """
    try:
        # Basic email validation
        import re
        email_regex = r'^[^\s@]+@[^\s@]+\.[^\s@]+$'
        if not re.match(email_regex, feedback.email):
            raise HTTPException(status_code=400, detail="Invalid email format")
        
        # Create feedback entry
        feedback_entry = {
            "id": int(datetime.now().timestamp() * 1000),
            "name": feedback.name,
            "email": feedback.email,
            "message": feedback.message,
            "timestamp": datetime.now().isoformat()
        }
        
        # Store in memory
        feedback_store.append(feedback_entry)
        
        # Also save to file for persistence
        try:
            with open("feedback.log", "a") as f:
                f.write(json.dumps(feedback_entry) + "\n")
        except Exception as e:
            print(f"Warning: Could not save feedback to file: {e}")
        
        print(f"✅ Feedback submitted by: {feedback.name}")
        
        return {
            "success": True,
            "message": "Feedback submitted successfully",
            "id": feedback_entry["id"]
        }
    except HTTPException:
        raise
    except Exception as e:
        print(f"❌ Error submitting feedback: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/feedback")
async def get_all_feedback():
    """
    Get all feedback (admin endpoint)
    """
    return {
        "success": True,
        "feedback": feedback_store,
        "count": len(feedback_store)
    }

# Health check endpoint for hosting platforms
@app.get("/health")
async def health_check():
    return {
        "status": "healthy",
        "service": "Easy Materials API",
        "ai_configured": client is not None
    }

if __name__ == "__main__":
    import uvicorn
    
    # Get port from environment variable (required for hosting platforms like Render, Railway, etc.)
    port = int(os.getenv("PORT", 8000))
    host = os.getenv("HOST", "0.0.0.0")
    
    print("\n🚀 Starting Easy Materials API...")
    print(f"📍 Service will be available at: http://{host}:{port}")
    print("📊 Endpoints:")
    print("   POST /api/scan - Scan material image")
    print("   POST /api/feedback - Submit feedback")
    print("   GET  /api/feedback - Get all feedback")
    print("   GET  /health - Health check")
    print("🧠 AI Model: Llama 4 Scout 17B Vision")
    if not api_key:
        print("⚠️  WARNING: GROQ_API_KEY not set. Please configure it in .env file")
    print()
    uvicorn.run(app, host=host, port=port)
