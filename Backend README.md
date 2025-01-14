# CDP Support Chatbot Backend

## Tech Stack
- Flask
- LangChain
- OpenAI

## Features
1. Answer "how-to" questions for Segment, mParticle, Lytics, and Zeotap.
2. Fetch documentation dynamically.
3. Handle user-defined questions and specific CDP contexts.

## How to Run
1. Install Python dependencies: `pip install flask langchain openai requests`.
2. Add your OpenAI API key in `server.py`.
3. Run the server: `python server.py`.
4. API runs on `http://localhost:5000/ask`.
