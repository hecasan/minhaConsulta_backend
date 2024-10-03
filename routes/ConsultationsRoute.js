const express = require('express');
const router = express.Router();
const { getAllConsultations, createConsultation } = require('../controllers/ConsultationsController');

// Rota para obter todas as consultas
router.get('/consultations', getAllConsultations);

// Rota para criar uma nova consulta
router.post('/consultations', createConsultation);

module.exports = router;
