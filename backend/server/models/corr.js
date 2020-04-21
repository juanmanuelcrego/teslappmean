const mongoose = require("mongoose")
const { Schema } = mongoose

const CorrSchema = new Schema({
    name: {type: String, required: true},
    intensity: {type: Number, required: true},
    date: { type: Date, default: Date.now, required: true }
})

module.exports = mongoose.model("Corr", CorrSchema)