import Schema from "mongoose";
import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password_digest: {
      type: String,
      required: true,
    },
    appointmentDate: {
      type: Schema.Types.ObjectId,
      ref: "appointments",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("users", userSchema);
export default User;
