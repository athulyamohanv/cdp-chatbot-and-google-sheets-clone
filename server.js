const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let spreadsheetData = [];

app.post('/save', (req, res) => {
    spreadsheetData = req.body.data;
    res.send({ message: 'Data saved successfully' });
});

app.get('/load', (req, res) => {
    res.send({ data: spreadsheetData });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
