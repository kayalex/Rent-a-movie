import { NextResponse } from "next/server";
// import Actor from "../../../../models/Actor";
import pool from "../../../../db";

export async function GET() {
  try {
    const [rows] = await pool.query("SELECT * FROM actors WHERE");
    return NextResponse.json(rows);
  } catch (error) {
    console.log("Databse query error", error);
    return NextResponse.json(
      { error: "failed to fetch actors" },
      { status: 500 }
    );
  }
}
