import Schema from "mongoose";
import mongoose from "mongoose";
const appointmentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    appointmentDate: {
      type: Date,
      required: true,
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
  },
  {
    timestamps: true,
  }
);

const Appointment = mongoose.model("appointments", appointmentSchema);
export default Appointment;
