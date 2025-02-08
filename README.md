# 🚀 Margadarshak

Margadarshak is a 🌟 career guidance platform that helps users explore career paths based on their inputs. It uses Flask 🐍 for the backend and React ⚛️ for the frontend, integrating AI-powered recommendations powered by Google's Gemini 🤖. 
It also allows people to switch to Indian regional languages 🏳️.

## ✨ Features
- 📝 Multi-step form for user inputs
- 🤖 AI-powered career recommendations
- 🎨 Interactive UI with animations
- 🛠️ Flask backend with API endpoints
- ⚛️ React frontend with dynamic rendering
- 🌍 Regional Language support
- 🔥 Gemini API Integration

## 🏗️ Tech Stack
- **Frontend:** React ⚛️, Tailwind CSS 🎨, Framer Motion 🎭, React Markdown 📝, Lottie 🎥
- **Backend:** Flask 🐍, Flask-CORS 🌍
- **Database:** (Specify if using one)
- **AI Model:** Gemini 🤖 (or specify a different AI model if used)

## 🛠️ Installation

### 📌 Prerequisites
- Node.js & npm 📦
- Python 3.x 🐍
- Virtual environment (optional but recommended) 🏕️

### 🔧 Backend Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/margadarshak.git
   cd margadarshak
   ```
2. Set up a virtual environment (optional but recommended):
   ```sh
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```sh
   pip install -r requirements.txt
   ```
4. Run the Flask server:
   ```sh
   python server.py
   ```

### 🎨 Frontend Setup
1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```

## 🚀 Deployment
### 🖥️ Using Gunicorn (For Render or VPS)
Run the following command:
```sh
 gunicorn -w 4 -b 0.0.0.0:5000 server:app
```
Ensure the `Procfile` contains:
```sh
web: gunicorn server:app
```

## 🔗 API Endpoints
- `POST /career-recommendations` - Accepts user input and returns career guidance

## Environment Variables
- `GEMINI_API_KEY (backend)`
- `VITE_API_BASE_URL (frontend)`
