import { Router } from "express";
import additionRouter from "./modules/addition/routers/addition.router";

const mainRouter = Router();

mainRouter.use("/addition", additionRouter);

export default mainRouter;
