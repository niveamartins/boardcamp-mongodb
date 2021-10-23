import express from "express";
import cors from "cors";
import {createCategories} from "./controllers/categoriesController.js" 

const app = express();

app.use(cors());
app.use(express.json());

app.post("/categories", createCategories)

app.listen(4000)