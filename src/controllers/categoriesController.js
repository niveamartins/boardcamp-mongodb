import { insert } from "../services/insertServices.js";
import { client } from "../database/connection.js";
import categoriesSchema from "../schemas/categoriesSchema.js";

async function createCategories(req, res) {
    try {
        const {error} = categoriesSchema.validate(req.body)
        if (error) {
            console.log("[ERROR CATEGORIES VALIDATION]: ", error.details[0].message)
            return res.status(400).send({
                message: error.details[0].message
            })
        }
        
        const docs = client.db("boardcamp").collection("categories").find({
            name: req.body.name
        })
        if (await docs.count() !== 0) {
            console.log("[ERROR CATEGORIES INSERT]: ", "CATEGORY ALREADY EXISTS")
            return res.status(409).send({
                message: "Category already registered."
            })
        }

        insert("categories", req.body);
        return res.sendStatus(201)
    } catch (err) {
        console.log("[ERROR CREATE CATEGORIES CONTROLLER]: ", err)
        return res.status(500).send({
            message: err.message
        })
    }
}

async function listCategories(req, res) {
   try { 
       const docs = client.db("boardcamp").collection("categories").find()
        const toSend = []
        await docs.forEach((doc)=>{
            toSend.push(doc)
        })

        console.log("[CATEGORIES LIST SENT]")
        return res.status(200).send(toSend)
    } catch (err) {
        console.log("[ERROR LIST CATEGORIES CONTROLLER]: ", err)
        return res.status(500).send({
            message: err.message
        })
    }
}


export {createCategories, listCategories};