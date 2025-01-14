import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [question, setQuestion] = useState('');
    const [response, setResponse] = useState('');
    const [cdp, setCdp] = useState('all');

    const askQuestion = async () => {
        try {
            const res = await axios.post('http://localhost:5000/ask', {
                question,
                doc_type: cdp,
            });
            setResponse(res.data.answer || res.data.error);
        } catch (error) {
            setResponse('Error communicating with the backend');
        }
    };

    return (
        <div className="App">
            <h1>CDP Support Chatbot</h1>
            <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ask your question..."
            />
            <select value={cdp} onChange={(e) => setCdp(e.target.value)}>
                <option value="all">All CDPs</option>
                <option value="segment">Segment</option>
                <option value="mparticle">mParticle</option>
                <option value="lytics">Lytics</option>
                <option value="zeotap">Zeotap</option>
            </select>
            <button onClick={askQuestion}>Ask</button>
            <div>
                <h3>Response:</h3>
                <p>{response}</p>
            </div>
        </div>
    );
}

export default App;
