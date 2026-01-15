import { Router } from 'express'
import { renderHomepage } from '../controllers/root.controller.js'

export const rootRouter = Router()

rootRouter.get('/', renderHomepage)
