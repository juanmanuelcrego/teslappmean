// dentro de la variable mongoose guardamos el requerimiento de mongoose, el pkg para utilizar mongodb dentro
// de express
const mongoose = require("mongoose")
// utilizamos el atributo Schema de mongoose para justamente poder hacer los esquemas de la bd
const { Schema } = mongoose

// Aplicamos el Schema de mongoose y comenzamos a darle forma a nuestra bd en json
const BatterySchema = new Schema({
    name: {type: String, required: true},
    voltage: {type: Number, required: true},
    temperature: {type: Number, required: true},
    date: { type: Date, default: Date.now, required: true }
})

// exportamos el modelo de bd de mongoose
module.exports = mongoose.model("Battery", BatterySchema)