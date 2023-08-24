// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const DiaryEntry = require('./diaryEntry'); // Импортируйте модель

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Подключите базу данных
require('./db');

// Маршрут для получения записей
app.get('/api/diary', async (req, res) => {
    try {
        const entries = await DiaryEntry.find();
        res.json(entries);
    } catch (error) {
        console.error('Error fetching diary entries:', error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

// Маршрут для добавления записи
app.post('/api/diary', async (req, res) => {
    try {
        const { text } = req.body;
        const newEntry = new DiaryEntry({ text });
        await newEntry.save();
        res.status(201).json(newEntry);
    } catch (error) {
        console.error('Error adding diary entry:', error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
