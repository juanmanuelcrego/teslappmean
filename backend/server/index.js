// Dentro de la variable express se guarda el requerimiento del framework express
const express = require("express")
// dentro de la variable morgan guardamos el pkg morgan, que nos servirá como ayuda de control de datos
// del servidor
const morgan = require("morgan")
// dentro de la variable app guardamos el framework express con todas sus funcionalidades
const app = express()

const cors = require("cors")

const { mongoose } = require("./database")

// Settings
app.set("port", process.env.PORT || 3000)
// process.env.PORT lo que hace es utilizar el puerto disponible, sea del OS o del server donde tengamos 
// alojada la app, el server nos dará el puerto a utilizar, no podemos setearlo nosotros, en caso de no 
// encontrar un puerto, lo que hará es utilizar el puerto 3000

// Middelwares
// con el parametro use lo que hacemos es justamente utilizar alguna funcionalidad en especifico
// tanto de un pkg como de un framework
app.use(morgan("dev")) //morgan dev lo que hará es mostrarnos las consultas al servidor en la consola
app.use(express.json()) //utilizamos la funcionalidad de json de express para que el servidor sepa que
// la info que está enviando y recibiendo sea en formato json
app.use(cors({origin: 'http://localhost:4200'}))

// Routes
// Le decimos a express que en la ruta /baterias deberá mostrar lo que especificamos en el archivo batteries.routes
app.use("/baterias",require("./routes/batteries.routes"))
app.use("/corriente", require("./routes/corrs.routes"))

// Server start
app.listen(app.get("port"), () => {
    console.log("Server on port", app.get("port"))
})