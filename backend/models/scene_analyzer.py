import numpy as np
from sklearn.ensemble import RandomForestClassifier
import joblib
import os

class SceneAnalyzer:
    def __init__(self):
        self.model_path = 'models/scene_classifier.pkl'
        self.model = self.load_or_create_model()
    
    def load_or_create_model(self):
        if os.path.exists(self.model_path):
            return joblib.load(self.model_path)
        else:
            # Create and train a simple model
            model = RandomForestClassifier(n_estimators=100)
            # In production, train with real data
            return model
    
    def analyze_scene_complexity(self, scene_description):
        """
        Analyze scene complexity and suggest shot count
        """
        word_count = len(scene_description.split())
        
        # Simple heuristic for shot count
        if word_count < 20:
            return {'complexity': 'simple', 'recommended_shots': 2}
        elif word_count < 50:
            return {'complexity': 'medium', 'recommended_shots': 4}
        else:
            return {'complexity': 'complex', 'recommended_shots': 6}
    
    def extract_keywords(self, text):
        """
        Extract important keywords for scene understanding
        """
        keywords = {
            'action': ['fight', 'chase', 'run', 'explosion', 'car'],
            'dialogue': ['conversation', 'talk', 'discuss', 'argue', 'debate'],
            'emotion': ['sad', 'happy', 'angry', 'tense', 'romantic'],
            'lighting': ['dark', 'bright', 'dim', 'shadow', 'sunlight', 'neon']
        }
        
        found_categories = []
        text_lower = text.lower()
        
        for category, words in keywords.items():
            if any(word in text_lower for word in words):
                found_categories.append(category)
        
        return found_categories