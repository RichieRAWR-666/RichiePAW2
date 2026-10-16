import express from 'express'

import FakultasController from '../controllers/fakultas.controller.js'
import ProdiController from '../controllers/prodi.controller.js'
import logMiddleware  from '../middleware/log.middleware.js'

const router = express.Router()
router.use(logMiddleware)

// Routes Fakultas
router.get('/fakultas', FakultasController.index)
router.get('/fakultas/:id', FakultasController.show)
router.post('/fakultas', FakultasController.store)
router.put('/fakultas/:id', FakultasController.update)
router.patch('/fakultas/:id', FakultasController.update)
router.delete('/fakultas/:id', FakultasController.delete)

// Routes Prodi
router.get('/prodi', ProdiController.index) 
router.get('/prodi/:id', ProdiController.show) 
router.post('/prodi', ProdiController.store) 
router.put('/prodi/:id', ProdiController.update) 
router.patch('/prodi/:id', ProdiController.update) 
router.delete('/prodi/:id', ProdiController.delete) 

export default router   