import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema(
  {
   skills: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    education: {
      type: String,
      required: true,
    },
  
  },
  { timestamps: true }
);

export default mongoose.model("Profile", ProfileSchema);