import User from "../db/models/UserModel.js";
import Appointment from "../db/models/AppointmentModel.js";


export const GetAppointments = async (req, res) => {
  try {
    const appointment = await Appointment.find();
    res.save(appointment);
  } catch (error) {
    throw error;
  }
};

export const GetUserAppointments = async (req, res) => {
  try {
    const userAppointments = await Appointment.find({
      user_id: req.params.user_id,
    });
    res.send(userAppointments);
  } catch (error) {
    throw error;
  }
};

export const CreateAppointment = async (req, res) => {
  try {
    const newAppointment = await Appointment({
      ...req.body,
      user_id: req.params.user_id,
    });
    newAppointment.save();
    await User.findByIdAndUpdate(
      { _id: req.params.user_id },
      { $push: { appointments: newAppointment } },
      { upsert: true, new: true, useFindAndModify: false }
    );
  } catch (error) {
    throw error;
  }
};

export const GetAppointmentById = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.appt_id);
    res.send(appointment);
  } catch (error) {
    throw error;
  }
};

export const DeleteAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.appt_id);
    await Appointment.findByIdAndDelete(req.params.appt_id);
    res.send({ mes: "Appointment Deleted" });
  } catch (error) {
    throw error;
  }
};

export const UpdateAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndUpdate(
      req.params.appt_id,
      {
        ...req.body,
      },
      { new: true, useFindAndModify: false }
    );
    res.send(appointment);
  } catch (error) {
    throw error;
  }
};


