import Joi from "joi";

const categoriesSchema = Joi.object({
    name: Joi.string().alphanum().min(1).required()
})

export default categoriesSchema;