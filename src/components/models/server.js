const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const DiaryEntry = require('./diaryEntry'); // Путь к вашей модели

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Подключение к базе данных MongoDB
mongoose.connect('mongodb://localhost:27017/diaryDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err);
});

// Маршрут для получения записей
app.get('/api/diary', async (req, res) => {
    try {
        const entries = await DiaryEntry.find();
        res.json(entries); // Отправляем JSON-ответ
    } catch (error) {
        console.error('Error fetching diary entries:', error);
        res.status(500).json({ error: 'An error occurred' }); // Также можно отправить JSON в случае ошибки
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