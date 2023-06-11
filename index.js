import * as dotenv from "dotenv";
dotenv.config();

import express from "express"
import joyasRouter from './routes/joyas.route.js'

const app = express();

app.use(express.json());
app.use("/api", joyasRouter)


const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})


