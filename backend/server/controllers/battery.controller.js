// Dentro de la variable Battery guardamos el requerimiento del modelo de db
const Battery = require("../models/battery")
// Declaramos a la variable batteryCtrl como un objeto de js
const batteryCtrl = {}

// Funcion que consulta el listado de baterias
batteryCtrl.getBatteries = async (req, res) => {
    // Usamos la nueva funcion de ES6 async y await, decimos que cuando encuentre las baterias las guarde en la 
    // variable batteries, usamos await para especificar que la consulta lleva su tiempo
    // async y await se utilizan en lugar de utilizar callbacks o promesas .then y .catch
    const batteries = await Battery.find()
    // Cuando el servidor hizo la consulta a la db responde mediante res y un json
    res.json(batteries)
}


// Funcion que crea nuevas baterias
batteryCtrl.createBattery = async (req, res) => {
        const battery = new Battery({
            name: req.body.name,
            voltage: req.body.voltage,
            temperature: req.body.temperature,
            date: req.body.date
        })
        await battery.save()
        res.json({
            "Status": "La nueva batería fue cargada con éxito"
        })
}

// Funcion para consultar una bateria en especifico por ID
batteryCtrl.getBattery = async (req, res) => {
    const battery = await Battery.findById(req.params.id)
    res.json(battery)
}

// Funcion para editar una bateria en específico por ID
batteryCtrl.editBattery = async (req, res) => {
    // Al escribir una constante y entre llaves colocar en este caso el id, lo que hacemos es darle a la variable
    // el nombre que esta encerrado entre llaves, y ademas decirle que tiene que almacenar ese parámetro, de en 
    // este caso req.params
    const {id} = req.params
    // Utilizo el objeto entre llaves con el $ para decirle a MongoDb que quiero actualizar un dato, lo hago 
    // con una constante que almacena un objeto con las especificaciones de la bateria, hay que colocar siempre
    // el body para que node sepa que es sobre el json
    const battery = {
        name: req.body.name,
        voltage: req.body.voltage,
        temperature: req.body.temperature,
        date: req.body.date
    }
    // Con el objeto new: true lo que hacemos es decirle que si no existe el id para editar que cree ese id nuevo
    await Battery.findByIdAndUpdate(id, {$set: battery}, {new: true})
    res.json({status: "bateria actualizada"})
}

// Funcion para eliminar una batería en especifico por ID
batteryCtrl.deleteBattery = async (req, res) => {
    await Battery.findByIdAndDelete(req.params.id)
    res.json({Status: "Bateria eliminada con éxito"})
}

module.exports = batteryCtrl