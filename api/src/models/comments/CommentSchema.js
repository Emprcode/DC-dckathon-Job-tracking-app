import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
  {
    comment: {
      type: String,
      // required: true,
    },
    idJob:{
      type:mongoose.Types.ObjectId,
      ref:"Job",
      // required: true
    },
    sender:{
      type: String
    }
   
  },
  { timestamps: true }
);

export default mongoose.model("Comment", CommentSchema);
