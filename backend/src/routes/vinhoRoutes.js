const express = require('express');
const vinhoController = require('../controllers/vinhoController');

const router = express.Router();

router.get('/vinhos', vinhoController.listarVinhos);
router.get('/vinhos/:id', vinhoController.buscarVinhoPorId);
router.post('/vinhos', vinhoController.criarVinho);
router.put('/vinhos/:id', vinhoController.atualizarVinho);
router.delete('/vinhos/:id', vinhoController.deletarVinho);

module.exports = router;
