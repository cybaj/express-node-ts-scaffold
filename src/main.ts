import { HOST, PORT } from './@shared/config'
import { app } from './server'

const start = async () => {
  app.listen(PORT, HOST, () => {
    if (HOST) {
      console.log(`Running on http://${HOST}:${PORT}`)
    } else {
      console.log(`Running on port ${PORT}`)
    }
  })
}

start()

export default start
