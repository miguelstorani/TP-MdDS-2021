import express from "express";

var router = express.Router();

import { example_data } from "../controllers/exampledatamodel.controller";

router.get("/example_data_model", example_data)

export default router;