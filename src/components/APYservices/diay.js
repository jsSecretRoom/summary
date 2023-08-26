// api/diary.js
import { pool } from "./db";

export async function addDiaryEntry(entry) {
  const result = await pool.query(
    "INSERT INTO diary_entries (entry_text) VALUES ($1) RETURNING *",
    [entry]
  );
  return result.rows[0];
}

export async function fetchDiaryEntries() {
  const result = await pool.query("SELECT * FROM diary_entries");
  return result.rows;
}