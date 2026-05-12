import { Router } from "express";
import multiplicationRouter from "./modules/multiplication/routers/multiplication.router";

const mainRouter = Router();

mainRouter.use("/multiplication", multiplicationRouter);

export default mainRouter;
