const express = require('express')
const router = express.Router()
const { servicios } = require('../data/servicio.json')

router.get('/', (req, res) => {
  res.render("pages/servicio", { servicio: false })
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  
  const servicio = servicios.find(servicio => servicio.id === id)

  if (!servicio) return res.status(404).render("pages/error", { message: "404 - Servicio no encontrado" })

  res.render("pages/servicio", { servicio })
})

module.exports = router