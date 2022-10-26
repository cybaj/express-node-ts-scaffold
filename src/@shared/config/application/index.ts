import { castIntEnv } from '../utils'

/**
 * * Application Settings
 */
const {
  HOST = ''
} = process.env
const SERVER_URL = process.env.SERVER_URL || ''
const PORT = castIntEnv('PORT', 3000)

/**
 * * Rate limiter settings
 */
const MAX_REQUESTS = castIntEnv('MAX_REQUESTS', 1000)
const TIME_FRAME = castIntEnv('TIME_FRAME', 15 * 60 * 1000)

export default { HOST, SERVER_URL, PORT, MAX_REQUESTS, TIME_FRAME }
