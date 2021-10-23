import Joi from "joi";
import JoiDate from "@hapi/joi-date";

const extendedJoi = Joi.extend(JoiDate); // extend Joi with Joi Date

const customersSchema = extendedJoi.object({
    name: extendedJoi.string().alphanum().min(1).required(),
    phone: extendedJoi.string().length(11).pattern(/^[0-9]+$/),
    cpf: extendedJoi.string().length(11).pattern(/^[0-9]+$/),
    birthday: extendedJoi.date().format("YYYY-DD-MM").less('now').required()
})

export default customersSchema;