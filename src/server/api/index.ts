import cors from 'cors'
import { json, Router } from 'express'

const router = Router()
  .use(cors())
  .use(json())

export default router
