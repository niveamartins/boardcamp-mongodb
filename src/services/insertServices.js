import { client } from "../database/connection.js";

function insert(collection, doc) {   
    client.db("boardcamp").collection(collection).insertOne(doc)
}

export { insert };