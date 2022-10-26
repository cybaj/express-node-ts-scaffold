import { Router } from 'express'
import Boom from '@hapi/boom'

const router = Router()

router.get('/healthz', (_req, res) => res.send('OK'))
router.get('/version', (_req, res) =>
  res.send(JSON.stringify({ version: 'v' + process.env.npm_package_version }))
)

// all other routes should throw 404 not found
router.use('*', () => {
  throw Boom.notFound()
})

export default router
