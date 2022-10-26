import cors from 'cors'
import { errors } from './errors'
import express from 'express'
import helmet from 'helmet'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import { limiter } from './limiter'
import router from './routes'

export const app = express()

if (process.env.NODE_ENV === 'production') {
  app.use(limiter)
}

app.use(
  morgan(
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]'
  )
)
app.use(helmet())
app.use(json({ limit: '50mb' }))
app.use(urlencoded({ extended: true, limit: '50mb' }))
app.use(cors({ credentials: true, origin: true }))

app.use(router)
app.use(errors)

export default { app }
