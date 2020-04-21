const Corr = require("../models/corr")
const corrCtrl = {}

corrCtrl.getCorrs = async (req, res) => {
    const corrs = await Corr.find()
    res.json(corrs)
}

corrCtrl.createCorr = async (req, res) => {
    const corr = new Corr(req.body)
    await corr.save() 
    res.json({
        "Status": "Carga exitosa"
    })
}

corrCtrl.getCorr = async (req, res) => {
    const corr = await Corr.findById(req.params.id)
    res.json(corr)
}

corrCtrl.editCorr = async (req, res) => {
    const {id} = req.params
    const corr = {
        name: req.body.name,
        intensity: req.body.intensity
    }
    await Corr.findOneAndUpdate(id, {$set: corr}, {new: true})
    res.json({Status: "parámetros actualizados"})
}

corrCtrl.deleteCorr = async (req, res) => {
    await Corr.findByIdAndDelete(req.params.id)
    res.json({Status: "Se eliminó con éxito"})
}

module.exports = corrCtrl