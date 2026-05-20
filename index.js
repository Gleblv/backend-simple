import express, { json } from "express";
import mongoose from "mongoose";
import router from "./router.js";

const PORT = 3000;
const DB_URL =
  "mongodb+srv://aboba:aboba@cluster0.z86lbsk.mongodb.net/?appName=Cluster0";

const app = express();

app.use(express.json());
app.use("/api", router);

async function startApp() {
  try {
    await mongoose.connect(DB_URL);

    app.listen(PORT, () => console.log("Server working"));
  } catch (err) {
    console.log(err);
  }
}

startApp();
