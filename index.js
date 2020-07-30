import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import mongoose from 'mongoose'
import cors from 'cors'

import routes from './routes'

const app = express()

const PORT = '3000';
const HOST = '0.0.0.0';

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

let db = mongoose.connect('mongodb://localhost:27017/bills_api', { useMongoClient: true })

routes(app)

app.listen(PORT, HOST)