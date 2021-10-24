import { insert } from "../services/insertServices.js";
import { ObjectId } from "mongodb";
import { client } from "../database/connection.js";
import customersSchema from "../schemas/customersSchema.js";

async function createCustomers(req, res) {
    try {
        const {error} = customersSchema.validate(req.body)
        if (error) {
            console.log("[ERROR CUSTOMERS VALIDATION]: ", error.details[0].message)
            return res.status(400).send({
                message: error.details[0].message
            })
        }
        
        const docs = client.db("boardcamp").collection("customers").find({
            cpf: req.body.cpf
        })
        if (await docs.count() !== 0) {
            console.log("[ERROR CUSTOMERS INSERT]: ", "CUSTOMER ALREADY EXISTS")
            return res.status(409).send({
                message: "Customer already registered."
            })
        }

        insert("customers", req.body);
        return res.sendStatus(201)
    } catch (err) {
        console.log("[ERROR CUSTOMERS CONTROLLER]: ", err)
        return res.status(500).send({
            message: err.message
        })
    }
}

async function listCustomers(req, res) {
    const query = {}

    if(req.query.cpf) {
        query.cpf = new RegExp("^" + req.query.cpf + "[0-9]*$")
    }

    if(req.params.id) {
        query._id = new ObjectId(req.params.id)
    }

    const docs = client.db("boardcamp").collection("customers").find(query)
    const toSend = []
    
    await docs.forEach((doc)=>{
        toSend.push(doc)
    })

    console.log("[CUSTOMERS LIST SENT]")
    return res.status(200).send(toSend)
}


export {createCustomers, listCustomers};