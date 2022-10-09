const mongoose = require('mongoose');
const Joi = require("joi");

let myPlylistSchma = new mongoose.Schema({
    id: String,
    name: String,
    user_id: String,

})
exports.MyPlylistModel = mongoose.model("myPlylist", myPlylistSchma);

exports.validateSpotify = (_reqBody) => {
    let joiSchema = Joi.object({
        id: Joi.string().max(999).required(),
        name: Joi.string().min(1).max(999).required()
    })
    return joiSchema.validate(_reqBody);
}