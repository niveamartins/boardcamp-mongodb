import Joi from "joi";

const gamesSchema = Joi.object({
    name: Joi.string().min(1).required(),
    image: Joi.string().min(7).uri().required(),
    stockTotal: Joi.number().integer().min(1).positive().required(),
    categoryId: Joi.string().token().required(),
    pricePerDay: Joi.number().integer().min(1).positive().required()
})

export default gamesSchema;