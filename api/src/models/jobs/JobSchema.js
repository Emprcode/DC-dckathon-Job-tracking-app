import mongoose from "mongoose";

const JobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      //   required: true,
    },
    appliedDate: {
      type: Date,
      required: true,
    },
    jd: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Job", JobSchema);
