import express from "express";
import {
  deleteJob,
  findJobAndUpdate,
  getAllJObs,
  postJob,
} from "../models/jobs/JobModel.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const result = await postJob(req.body);

    result?._id
      ? res.json({
          status: "success",
          message: "Job Added to the list",
        })
      : res.json({
          status: "error",
          message: "Unable to add job to the list, Please try again later",
        });
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const result = await getAllJObs();

    res.json({
      status: "success",
      message: "Job fetched ",
      result,
    });
  } catch (error) {
    next(error);
  }
});
router.put("/", async (req, res, next) => {
  try {
    const { _id, ...rest } = req.body;
    const result = await findJobAndUpdate(_id, rest);

    result?._id
      ? res.json({
          status: "success",
          message: "Job updated successfully ",
        })
      : res.json({
          status: "error",
          message: "Unable to update, Please try again later ",
        });
  } catch (error) {
    next(error);
  }
});

router.delete("/", async (req, res, next) => {
  try {
    const { _id } = req.body;
    const result = await deleteJob(_id);
    result?._id
      ? res.json({
          status: "success",
          message: "The selected job deleted successfully ",
        })
      : res.json({
          status: "error",
          message: "Unable to delete the job, Please try again later",
        });
  } catch (error) {
    next(error);
  }
});

export default router;
