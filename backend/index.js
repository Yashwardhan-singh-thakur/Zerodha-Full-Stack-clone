import express from "express";
import methodOverride from "method-override";

import connectDb from "./config/db.js";

const app = express();
const PORT = process.env.PORT || 3000;

connectDb(); // database connected

app.get("/home", (req, res) => {
  res.send("hi your website is working");
});

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
});
