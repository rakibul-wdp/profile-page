import serverless from "serverless-http"
import express, { Request, Response } from "express"
import authsRoute from "./routes/authRoute";
import usersRoute from "./routes/userRoute";
import bodyParser from "body-parser";
import cors from "cors"
export const app = express()

app.use(bodyParser.json())
app.use(cors())

app.use("/auth", authsRoute)
app.use("/user", usersRoute)

app.get("/", (req: Request, res: Response) => {
    res.json({
        working: true,
        message: `CipherSchools Assignment`,
    })
});

export const handler = serverless(app)

