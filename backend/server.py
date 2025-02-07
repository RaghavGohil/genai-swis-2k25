from flask import Flask, request, jsonify
from flask_cors import CORS
from phi.agent import Agent
from phi.tools.exa import ExaTools
from phi.model.groq import Groq
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Initialize career guidance agent
career_guidance_agent = Agent(
    name="Career Guidance Agent",
    model=Groq(id="llama-3.3-70b-versatile"),
    tools=[ExaTools()],
    markdown=True,
    description="You are an expert career advisor. Your role is to assist users in finding the best career paths tailored to their interests, skills, and aspirations.",
    instructions=[
        "Use ExaTools to fetch insights from top career guidance resources and recommend suitable career paths.",
        "Provide comprehensive details on each career, including job roles, necessary qualifications, salary trends, and future scope.",
        "Ensure that the recommendations align with the user's education level, skills, and interests.",
        "Suggest alternative career paths if the primary option is not viable based on user inputs.",
        "If the user is from a rural area or lacks knowledge about career options, suggest foundational career paths, diploma programs, vocational training, and government-supported courses.",
        "Provide information on scholarships, government job opportunities, and skill-based training for rural students.",
        "Explain the long-term job stability, salary trends, and future scope of suggested career paths, emphasizing accessibility and affordability."
    ]
)

@app.route("/career-recommendations", methods=["POST"])
def career_guidance():
    data = request.json
    age = data.get("age")
    education_level = data.get("education_level")
    subjects = data.get("subjects", [])
    career_goal = data.get("career_goal", "Unsure")
    rural_background = data.get("rural_background", False)

    user_query = f"""
    I am {age} years old and have completed {education_level}. 
    I am interested in {', '.join(subjects) if subjects else 'various subjects'}. 
    I aspire to become {career_goal}. 
    """
    
    if rural_background:
        user_query += " I am from a rural area and need guidance on available career paths, courses, and government schemes."
    
    response = career_guidance_agent.run(user_query)
    print(respnse.content)
    
    return jsonify({"career_guidance": response.content})

if __name__ == "__main__":
    app.run(debug=True)
