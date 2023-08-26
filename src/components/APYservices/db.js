// db.js
import { createPool } from "@vercel/postgres";

export const pool = createPool({
  connectionString: "postgres://default:Nfjzd7ohZ3Wl@ep-weathered-surf-93041641-pooler.eu-central-1.postgres.vercel-storage.com/verceldb"
});