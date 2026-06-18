import express from "express";
import methodOverride from "method-override";
import cors from "cors";

import connectDb from "./config/db.js";
import holdingsRouter from "./router/holdingsRouter.js";
import positionsRouter from "./router/positionsRouter.js";
import userRouter from "./router/usersRouter.js";
// import ordersRouter from "./router/ordersRouter.js";

const app = express();
const PORT = process.env.PORT || 3000;
const corsOptions = { origin: "http://localhost:5173" };

connectDb(); // database connected

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", userRouter);
app.use("/holding", holdingsRouter);
app.use("/position", positionsRouter);

// app.use("/order", ordersRouter);

app.get("/home", (req, res) => {
  res.send("hi your website is working");
});

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
});
