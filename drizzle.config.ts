import {config}  from 'dotenv';
import type { Config } from 'drizzle-kit';

config({
    path: '.env.local',
})

export default {
  schema: './src/db/schema/*',
  out: './drizzle',
  driver: "pg", // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso'
  dbCredentials: {
    connectionString: process.env.DATABASE_URL || "",
  },
} satisfies Config;