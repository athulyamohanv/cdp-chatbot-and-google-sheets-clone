# cdp-chatbot-and-google-sheets-clone
Assignment for Zeotap - CDP Chatbot and Google Sheets Clone


CDP Chatbot and Google Sheets Clone
This repository contains two distinct projects as part of the Zeotap assignment:

Google Sheets Clone: A web application mimicking Google Sheets with core functionalities like mathematical functions, data quality functions, and spreadsheet UI.
CDP Chatbot: A chatbot that answers "how-to" questions related to Customer Data Platforms (Segment, mParticle, Lytics).


Table of Contents
Project Structure
Tech Stack
Setup Instructions
Backend (Chatbot Server)
Frontend (Chatbot)
Spreadsheet Clone
Features
Future Enhancements

cdp-chatbot-and-google-sheets-clone/
├── backend/
│   ├── server.py
│   ├── requirements.txt
│   └── README.md
├── chatbot-frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── README.md
├── google-sheets-clone/
│   ├── frontend/
│   │   ├── public/
│   │   ├── src/
│   │   ├── package.json
│   │   └── README.md
└── README.md


Tech Stack
1. Backend (Chatbot Server)
Language: Python
Framework: Flask
Libraries:
langchain: For conversational AI.
openai: To interact with GPT-based models.
requests: For HTTP requests.
2. Frontend
Chatbot
Framework: React.js
Libraries: Axios for API calls.
Google Sheets Clone
Framework: React.js
Libraries:
react-data-grid: For spreadsheet-like UI.
Bootstrap: For styling.

Features
Google Sheets Clone
Spreadsheet-like interface with rows and columns.
Mathematical functions: SUM, AVERAGE, MAX, MIN, COUNT.
Data quality functions: TRIM, UPPER, LOWER, REMOVE_DUPLICATES, FIND_AND_REPLACE.
Basic data entry and validation.
Bonus features: Save/load spreadsheets and charts with Chart.js.
CDP Chatbot
Answers "how-to" questions about Segment, mParticle, Lytics, and Zeotap.
Retrieves information dynamically from official documentation.
Handles question variations and provides detailed responses.
Bonus: Cross-CDP comparisons and advanced queries.


Future Enhancements
Add support for advanced spreadsheet formulas and conditional formatting.
Enable chatbot to handle voice-based queries.
Integrate spreadsheet clone with the backend for saving data to a database.
Deploy both applications to the cloud for public access.
