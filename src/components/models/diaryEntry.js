// models/diaryEntry.js
const mongoose = require('mongoose');

const diaryEntrySchema = new mongoose.Schema({
    text: String,
    // Дополнительные поля, если необходимо
});

const DiaryEntry = mongoose.model('DiaryEntry', diaryEntrySchema);

module.exports = DiaryEntry;