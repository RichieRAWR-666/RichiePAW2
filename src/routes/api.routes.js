import express from 'express'
import FakultasController from '../controllers/fakultas.controller.js'
import logmiddleware from '../middleware/log.middleware.js'

const router = express.Router()
router.use(logmiddleware)
router.get('/fakultas', FakultasController.index)
router.get('/fakultas/:id', FakultasController.show)
router.post('/fakultas', FakultasController.store)
router.put('/fakultas/:id', FakultasController.update)
router.patch('/fakultas/:id', FakultasController.update)
router.delete('/fakultas/:id', FakultasController.delete)
export default router