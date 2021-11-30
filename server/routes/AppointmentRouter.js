const Router = require('express').Router()
const AppointmentController = require('../controllers/AppointmentController')

Router.get("/", AppointmentController.GetPosts);
Router.get("/:appt_id", AppointmentController.GetPostById);
Router.post("/:user_id", AppointmentController.CreatePost);
Router.put("/:appt_id", AppointmentController.UpdatePost);
Router.delete("/:apptt_id", AppointmentController.DeletePost);
Router.get("/:user_id", AppointmentController.GetUserPosts);

module.exports = Router;