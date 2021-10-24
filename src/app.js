import express from "express";
import cors from "cors";
import categoriesRoutes from "./routes/categoriesRoutes.js";
import gamesRoutes from "./routes/gamesRoutes.js";
import customersRoutes from "./routes/customersRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(categoriesRoutes)
app.use(gamesRoutes)
app.use(customersRoutes)

app.listen(4000)