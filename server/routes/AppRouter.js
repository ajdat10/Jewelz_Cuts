import express from "express";

import UserRouter from "./UserRouter.js";
import AppointmentRouter from "./AppointmentRouter.js";

const Router = express.Router()

Router.use("/users", UserRouter);
Router.use("/appts", AppointmentRouter);

export default Router;
