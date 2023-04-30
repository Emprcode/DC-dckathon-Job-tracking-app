import express from "express";
import {
  addProfile,
  findProfileAndUpdate,
  getProfile,
} from "../models/Profile/ProfileModel";
const router = express.Router();

//post
router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const result = await addProfile(req.body);
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

//get
router.get("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const result = await getProfile(req.body);
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
