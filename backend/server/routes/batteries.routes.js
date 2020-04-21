// Dentro de la variable express almacenamos el requerimiento del framework express
const express = require("express")
// Dentro de la variable router almacenamos la funcion router del framework express
const router = express.Router()
// Dentro de la variable battery se almacena el requerimiento del battery control con las funciones
// necesarias para la consulta, creacion, edicion y eliminación de datos de la bd
const battery = require("../controllers/battery.controller")

// Rutas que el servidor conocerá
router.get("/", battery.getBatteries)
router.post("/", battery.createBattery)
router.get("/:id", battery.getBattery)
router.put("/:id", battery.editBattery)
router.delete("/:id", battery.deleteBattery)

// Se exporta el módulo router, que es la variable con contiene la funcion router del framework express
module.exports = router