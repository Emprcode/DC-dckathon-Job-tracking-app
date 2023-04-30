import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema(
  {
    // fName: {
    //   type: String,
    //   required: true,
    // },
    // lName: {
    //   type: String,
    //   required: true,
    // },

    userId: {
      type: mongoose.Types.ObjectId,
    },
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
    resume: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Profile", ProfileSchema);
