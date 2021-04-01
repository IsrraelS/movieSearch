import express from 'express'
import userRoutes from './routes/user.routes.js'
import movieRoutes from './routes/movie.routes.js'
import ordersRoutes from './routes/orders.routes.js'
import path from 'path'
import { db } from './config/db.js'
import dotenv from 'dotenv';

// initialize Express
const app = express();
const __dirname = path.dirname(new URL(import.meta.url).pathname);

db();

dotenv.config();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/handlebars', (req, res) => {
    res.render('index')
})


// Able to receive JSON on body Requests
app.use(express.json());

app.use('/user', userRoutes)
app.use('/movie', movieRoutes)
app.use('/orders', ordersRoutes)

app.listen(8080, () => {
    console.log('Web server is running on port 8080')
})