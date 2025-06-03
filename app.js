const express = require("express")
const app = express()
const PORT = 3000

// Rutas
const indexRouter = require('./routes/index')
const servicioRouter = require('./routes/servicio')

// Configuracion de la plantilla
app.set("view engine", "ejs")
app.use(express.static("public"))

// Pagina principal
app.use('/', indexRouter)

// Servicios
app.use('/servicio', servicioRouter)

// 404
app.use((req, res) => {
  res.status(404).render("pages/error", { message: "404 - La ruta no existe" })
})

app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`)
})