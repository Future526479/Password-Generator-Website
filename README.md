Password Generator Web App 🔐

A full-stack Password Generator Web Application built with React.js (frontend) and FastAPI (backend).
Users can generate secure random passwords by selecting the desired length.

🌐 Live Demo: https://password-generator-website-ebon.vercel.app/

-----

Features ✨
1. Generate secure random passwords
2. Select password length (5–15 characters)
3. Fast password generation using a backend API
4. Loading indicator while generating password
5. Clean and responsive UI
6. Fully deployed online

------

Tech Stack 🛠

Frontend
1. React.js
2. JavaScript (ES6)
3. HTML5
4. CSS3

Backend
1. Python
2. FastAPI
3. Pydantic

Deployment
1. Vercel (Frontend)
2. Render (Backend)

Tools
1. Git
2. GitHub

------

Project Architecture 🏗

1. React Frontend (Vercel)

        │
        │ HTTP Request (POST /generater)
        ▼
2. FastAPI Backend (Render)

        │
        ▼
3. Password Generator Logic (Python)

Flow:
1. User selects password length
2. React sends POST request to FastAPI
3. Backend generates password using Python
4. Password is returned as JSON
5. React displays the result

-----

API Endpoint ⚡

POST /generater

Request body:

    {
    "length": 10
    }

Response:

    {
      "password": "A#7dP!9kLm"
    }

-----

Running the Project Locally 💻
1. Clone the repository

        git clone https://github.com/YOUR_USERNAME/password-generator.git
        
        cd password-generator

-----

2. Backend Setup (FastAPI)

Install dependencies:
        
        pip install fastapi uvicorn

Run the API:

        uvicorn api:api --reload

Server will run at:

        http://127.0.0.1:8000

-----

3. Frontend Setup (React)

Install dependencies:

        npm install

Start development server:

        npm run dev

-----

Project Structure 📂

    Password-Generator-Website
    │
    ├── api.py
    ├── generater_pass.py
    ├── requirements.txt
    │
    ├── frontend
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── App.css
    │
    └── README.md

-----

What I Learned 📚
1. Through this project I learned:
2. Building a REST API using FastAPI
3. Connecting React frontend to a Python backend
4. Handling asynchronous requests with Fetch API
5. Implementing CORS middleware
6. Deploying applications using Vercel and Render
7. Structuring a full-stack project

-----

Future Improvements 🚀
1. Password strength indicator
2. Copy password to clipboard
3. Options for symbols, numbers, uppercase letters
4. Mobile UI improvements
5. Unit tests for backend logic

-----

Author 👨‍💻

    GitHub: https://github.com/Future526479

-----

License 📄

    This project is open source and available under the MIT License.

