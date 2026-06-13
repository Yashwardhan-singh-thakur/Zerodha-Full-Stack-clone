import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

export const mongoUrl =
  process.env.NODE_ENV !== "production"
    ? process.env.DB_URL
    : process.env.DB_URL;

export const googleCallbackUrl =
  process.env.NODE_ENV !== "production"
    ? "/auth/google/callback"
    : "https://wanderlust-6nid.onrender.com/auth/google/callback";
