from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import google.generativeai as genai  # Import Gemini API
import os

load_dotenv()

app = Flask(__name__)
CORS(app)

# Configure Gemini API
genai.configure(api_key=os.getenv('GEMINI_API_KEY'))  # Replace with your actual API key

@app.route("/career-recommendations", methods=["POST"])
def get_career_guidance():
    data = request.json
    print(data)
    query = f"""
    Name: {data.get('name')}, Age: {data.get("age")}, Education: {data.get("education")}, 
    Interests: { data.get('interests') or 'various fields'}, 
    Provide proper career guidance. The future aspects and recommendations to scholarships if necessary.
    """
    query += " Give your answer in markdown."
    
    model = genai.GenerativeModel("gemini-pro")
    response = model.generate_content(query)
    print(response.text)

    return jsonify({"career_guidance": response.text})

if __name__ == "__main__":
    app.run(debug=True)
