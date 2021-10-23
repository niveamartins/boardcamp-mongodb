import express from "express";
import cors from "cors";
import categoriesRoutes from "./routes/categoriesRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(categoriesRoutes)

app.listen(4000)