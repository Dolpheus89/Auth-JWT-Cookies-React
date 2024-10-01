import express from 'express'
import cors from "cors"
import cookieParser from "cookie-parser"
import { initDB } from './utils/db.js'
import { log } from './middleware/log.js'
import "dotenv/config"
import UserRoutes from "./routes/UserRoutes.js"

const app = express()
const PORT = process.env.PORT || 3310

app.use(log)
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", UserRoutes )

initDB()

app.listen(PORT, () => {
    console.info(`Server is running on port ${PORT}`);
})