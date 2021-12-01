import express from "express";
const Router = express.Router();
import {GetAppointments,GetUserAppointments, GetAppointmentById, CreateAppointment,UpdateAppointment, DeleteAppointment }  from "../controllers/AppointmentController.js"

Router.get("/", GetAppointments);
Router.get("/:appt_id", GetAppointmentById);
Router.post("/:user_id", CreateAppointment);
Router.put("/:appt_id", UpdateAppointment);
Router.delete("/:apptt_id", DeleteAppointment);
Router.get("/:user_id", GetUserAppointments);

export default Router;