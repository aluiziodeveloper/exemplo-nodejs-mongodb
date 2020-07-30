import express from 'express'
import create from './services/create'
import list from './services/list'

const router = express.Router()

router.get('/', list)

router.post('/', create)

export default router