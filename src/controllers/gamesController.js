import { insert } from "../services/insertServices.js";
import { ObjectId } from "mongodb";
import { client } from "../database/connection.js";
import gamesSchema from "../schemas/gamesSchema.js";

async function createGames(req, res) {
    try {
        const {error} = gamesSchema.validate(req.body)
        if (error) {
            console.log("[ERROR GAMES VALIDATION]: ", error.details[0].message)
            return res.status(400).send({
                message: error.details[0].message
            })
        }

        const CategoryID = new ObjectId(req.body.categoryId)
        const category = await client.db("boardcamp").collection("categories").findOne({
            _id: CategoryID
        })

        if (category === null) {
            console.log("[ERROR GAMES INSERT]: ", "CATEGORY IS NOT REGISTERED")
            return res.status(400).send({
                message: "Category is not registered."
            })
        }
        
        const docs = client.db("boardcamp").collection("games").find({
            name: req.body.name
        })
        if (await docs.count() !== 0) {
            console.log("[ERROR GAMES INSERT]: ", "GAMES ALREADY EXISTS")
            return res.status(409).send({
                message: "Game already registered."
            })
        }

        insert("games", req.body);
        return res.sendStatus(201)
    } catch (err) {
        console.log("[ERROR GAMES CONTROLLER]: ", err)
        return res.status(500).send({
            message: err.message
        })
    }
}

async function listGames(req, res) {
    const docs = client.db("boardcamp").collection("games").find()
    const toSend = []
    await docs.forEach((doc)=>{
        toSend.push(doc)
    })

    console.log("[GAMES LIST SENT]")
    return res.status(200).send(toSend)
}


export {createGames, listGames};