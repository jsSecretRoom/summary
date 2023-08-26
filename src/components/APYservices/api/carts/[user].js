import { sql } from "@vercel/postgres";

export default async (req, res) => {
  const { user } = req.query;

  // Додаємо заголовки для дозволу CORS
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*"); // Доцільно обмежити конкретними доменами
  res.setHeader("Access-Control-Allow-Methods", "GET");

  const { rows } = await sql`SELECT * from CARTS where user_id=${user}`;

  res.status(200).json(rows);
};