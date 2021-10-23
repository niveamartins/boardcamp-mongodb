import Joi from "joi";
import JoiDate from "@hapi/joi-date";

const extendedJoi = Joi.extend(JoiDate); // extend Joi with Joi Date

const rentalsSchema = extendedJoi.object({
    customerId: extendedJoi.string().token().required(),
    gameId: extendedJoi.string().token().required(),
    daysRented: extendedJoi.number().integer().min(1).positive().required()
})

export default rentalsSchema;