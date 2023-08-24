const mongoose = require('mongoose');

const diaryEntrySchema = new mongoose.Schema({
    text: String
});

const DiaryEntry = mongoose.model('DiaryEntry', diaryEntrySchema);

module.exports = DiaryEntry;