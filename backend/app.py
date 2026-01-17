from flask import Flask, request, jsonify
from flask_cors import CORS
import google.genai as genai
import os
from dotenv import load_dotenv
import json

load_dotenv()

app = Flask(__name__)
CORS(app)

# Configure Gemini AI
client = genai.Client(api_key=os.getenv('GEMINI_API_KEY'))

@app.route('/api/analyze-scene', methods=['POST'])
def analyze_scene():
    try:
        data = request.json
        scene_description = data.get('scene', '')
        
        if not scene_description:
            return jsonify({'error': 'Scene description is required'}), 400
        
        # Create prompt for AI
        prompt = f"""You are a professional cinematographer. Analyze this movie scene and provide a detailed shot breakdown.

Scene: {scene_description}

Respond with ONLY valid JSON in this exact format (no markdown, no extra text):
{{
  "sceneType": "dialogue/action/establishing",
  "mood": "describe the mood",
  "shots": [
    {{
      "shotType": "Wide Shot/Medium Shot/Close-up",
      "description": "detailed description of what to capture",
      "cameraMovement": "static/pan/dolly/tracking",
      "lighting": "natural/low-key/high-key",
      "duration": "X-Y seconds"
    }}
  ],
  "equipment": ["list", "of", "equipment"],
  "tips": ["practical", "shooting", "advice"]
}}"""

        # Generate response
        response = client.models.generate_content(
            model="gemini-2.0-flash",
            contents=prompt
        )
        response_text = response.text
        
        # Clean and parse JSON
        clean_text = response_text.replace('```json', '').replace('```', '').strip()
        
        # Find JSON in response
        start_idx = clean_text.find('{')
        end_idx = clean_text.rfind('}') + 1
        
        if start_idx != -1 and end_idx > start_idx:
            json_str = clean_text[start_idx:end_idx]
            result = json.loads(json_str)
            return jsonify(result)
        else:
            raise ValueError("No valid JSON found in response")
            
    except Exception as e:
        print(f"Error: {str(e)}")
        # Return fallback data
        return jsonify({
            "sceneType": "dialogue",
            "mood": "tense",
            "shots": [
                {
                    "shotType": "Wide Establishing Shot",
                    "description": "Capture the full environment and character positions",
                    "cameraMovement": "static",
                    "lighting": "natural with fill",
                    "duration": "5-7 seconds"
                },
                {
                    "shotType": "Medium Shot",
                    "description": "Frame characters from waist up showing interactions",
                    "cameraMovement": "slow dolly",
                    "lighting": "three-point setup",
                    "duration": "4-6 seconds"
                }
            ],
            "equipment": [
                "Cinema camera or DSLR",
                "24-70mm lens",
                "Tripod with fluid head",
                "LED panel lights",
                "Lavalier microphones"
            ],
            "tips": [
                "Shoot at 24fps for cinematic look",
                "Use manual focus for control",
                "Record room tone for audio",
                "Get multiple takes for coverage"
            ]
        })

@app.route('/health', methods=['GET'])
def health():
    return jsonify({'status': 'healthy'})

if __name__ == '__main__':
    port = int(os.getenv('PORT', 5000))
    app.run(debug=True, host='0.0.0.0', port=port)