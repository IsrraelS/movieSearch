import express from 'express'
import userRoutes from './routes/user.routes.js'
import movieRoutes from './routes/movie.routes.js'
import ordersRoutes from './routes/orders.routes.js'
import { db } from './config/db.js'


// initialize Express
const app = express();

db();

// Able to receive JSON on body Requests
app.use(express.json());

app.use('/user', userRoutes)
app.use('/movie', movieRoutes)
app.use('/orders', ordersRoutes)

app.listen(8080, () => {
    console.log('Web server is running on port 8080')
})