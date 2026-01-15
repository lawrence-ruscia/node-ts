import express from 'express'
import 'dotenv/config'
import path from 'node:path'
import { rootRouter } from './routers/root.router.js'

const app = express()
const PORT = process.env.PORT ?? 3000
const dirname = import.meta.dirname

// App-level Middleware
app.use(express.urlencoded())
app.use(express.json())

// App Config
app.set('views', path.join(dirname, 'views'))
app.set('view engine', 'ejs')

// Routers
app.use('/', rootRouter)

app.listen(PORT, (err) => {
  if (err) {
    throw err
  }

  console.log(`Server running on port ${PORT.toString()}`)
})
