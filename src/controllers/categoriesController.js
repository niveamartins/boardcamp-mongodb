import {insert} from "../services/insertServices.js";

function createCategories(req, res) {
    insert("categories", req.body);
    return res.sendStatus(200)
}


export {createCategories};