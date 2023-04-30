import express from "express";
import {
  addProfile,
  findProfileAndUpdate,
  getSingleProfile,
} from "../models/Profile/ProfileModel.js";
const router = express.Router();

//post
router.post("/", async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    console.log(req.body);
    const result = await addProfile({ ...req.body, userId: authorization });
    console.log(result);

    result?._id
      ? res.json({
          status: "success",
          message: "Profile added successfully",
        })
      : res.json({
          status: "error",
          message:
            "unable to add given profile section, please try again later",
        });
  } catch (error) {
    next(error);
  }
});

// get SIngle Profile
router.get("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const { authorization } = req.headers;

    const result = await getSingleProfile({ userId: authorization });
    console.log(result);

    res.json({
      status: "success",
      message: "all profile section fetched",
      result,
    });
  } catch (error) {
    next(error);
  }
});

//update
router.put("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const result = await findProfileAndUpdate(req.body);
    console.log(result);
    result?._id
      ? res.json({
          status: "success",
          message: "Profile added successfully",
        })
      : res.json({
          status: "error",
          message:
            "unable to add given profile section, please try again later",
        });
  } catch (error) {
    next(error);
  }
});
//delete
router.delete("/", async (req, res, next) => {
  try {
    const { _id } = req.body;
    const result = await deleteSingleProfileSection(_id);
    console.log(result);
    result?._id
      ? res.json({
          status: "success",
          message: "Profile section deleted successfully",
        })
      : res.json({
          status: "error",
          message:
            "unable to delete given profile section, please try again later",
        });
  } catch (error) {
    next(error);
  }
});

export default router;
