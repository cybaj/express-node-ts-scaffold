import dotenv from 'dotenv'
// import Boom from '@hapi/boom'

// Load '.env' file if production mode, '.env.<NODE_ENV>' otherwise
const envFile =
  process.env.NODE_ENV && process.env.NODE_ENV !== 'production'
    ? `.env.${process.env.NODE_ENV}`
    : '.env'
dotenv.config({ path: envFile })

import { castIntEnv } from './utils'

/**
 * * Application Settings
 */
export const {
  HOST = ''
} = process.env
export const SERVER_URL = process.env.SERVER_URL || ''
export const PORT = castIntEnv('PORT', 3000)

/**
 * * Rate limiter settings
 */
export const MAX_REQUESTS = castIntEnv('MAX_REQUESTS', 1000)
export const TIME_FRAME = castIntEnv('TIME_FRAME', 15 * 60 * 1000)

export default { HOST, SERVER_URL, PORT, MAX_REQUESTS, TIME_FRAME }

/**
 * * Check required settings, and raise an error if some are missing.
 */
/*
if () {
  throw Boom.badImplementation('No * found.')
}
*/
