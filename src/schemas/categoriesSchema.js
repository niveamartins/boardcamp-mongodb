import Joi from "joi";

const categoriesSchema = Joi.object({
    name: Joi.string().min(2).required()
})

export default categoriesSchema;