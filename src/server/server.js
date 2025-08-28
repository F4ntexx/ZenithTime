import express from 'express';
import usersRouter from './routes/users.js'
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan"


const app = express();
const PORT = 5000;
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.json());
app.use('/users', usersRouter)
app.get('/' , (req, res) => {
     res.send('Hello from Home page')
})

app.listen(PORT, () => console.log(`server running on port: http//localhost:${PORT}`));

