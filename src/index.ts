import dotenv from 'dotenv'
dotenv.config()

import { connectDB } from './database/connection/connectDB'

import express from 'express'
import { routes } from './routes'

const app = express()
const port = process.env.PORT || process.env.LOCALHOST_PORT

const start = async () => {
  await connectDB()

  app.use('/', routes)
  app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' })
  })

  app.listen(port, () => {
    console.log(`Server running on port ${port}`)
  })
}

start()
