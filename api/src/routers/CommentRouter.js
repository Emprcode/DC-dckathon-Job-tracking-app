import express from "express";
import { addComment, getComments } from "../models/comments/CommentModel.js";
const router = express.Router();

// /comments

router.post("/", async (req, res, next) => {
  try {
    // const {comment} = req.body

    const result = await addComment(req.body);

    result?._id
      ? res.json({
          status: "success",
          message: "You have added comments to this job",
        })
      : res.json({
          status: "error",
          message: "Unable to add comment to the list, Please try again later",
        });
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    console.log(authorization);
    const result = await getComments({ idJob: authorization });
    console.log(result);
    res.json({
      status: "success",
      message: "Job fetched ",
      result,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
