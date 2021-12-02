import mongoose from "mongoose";

const connection = mongoose.connect("mongodb://localhost:27017/jewelz_cuts", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default connection;
