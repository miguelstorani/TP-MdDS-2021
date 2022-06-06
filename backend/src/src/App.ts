import express, { Request, Response } from "express";
import cors from "cors";
import database from "./dbConnection";
import router from "./routes/routes" 
const app = express()

app.use(cors());
app.use("/api/v1.0/", router)

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("CMIT API running");
})

app.listen(8000,()=>{
  console.log('Server Started at Port, 8000')
})