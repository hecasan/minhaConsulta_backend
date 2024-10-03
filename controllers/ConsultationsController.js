const db = require('../db/database');

// Obter todas as consultas
const getAllConsultations = (req, res) => {
  const sql = `SELECT consultations.*, users.username FROM consultations 
               JOIN users ON consultations.userId = users.id`;
  db.all(sql, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ consultations: rows });
  });
};

// Criar uma nova consulta
const createConsultation = (req, res) => {
  const { userId, date, doctor, specialty, status } = req.body;
  const sql = `INSERT INTO consultations (userId, date, doctor, specialty, status) 
               VALUES (?, ?, ?, ?, ?)`;
  const params = [userId, date, doctor, specialty, status];
  db.run(sql, params, function(err) {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    res.json({
      message: 'Consulta criada com sucesso!',
      consultationId: this.lastID
    });
  });
};

module.exports = { getAllConsultations, createConsultation };
