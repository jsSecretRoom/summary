const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./your-database-module'); // Подключение к базе данных

app.use(bodyParser.json());

app.post('/api/save-entry', async (req, res) => {
  try {
    const { entryText } = req.body; // Получение данных от клиента
    await db.query('INSERT INTO diary_entries (entry_text) VALUES ($1)', [entryText]);
    res.status(201).send('Entry saved successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error saving entry');
  }
});

// Запуск сервера на порте 5000
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});