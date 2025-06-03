const express = require('express')
const router = express.Router()

// Inicio
router.get('/', (req, res) => {
  res.render("pages/index")
})

// Contacto
router.get('/contacto', (req, res) => {
  res.render("pages/contacto")
})

// Galeria
router.get('/galeria', (req, res) => {
  res.render("pages/galeria")
})

module.exports = router