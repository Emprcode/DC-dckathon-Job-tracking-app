import express from 'express'
import { createUser, findUser } from '../models/user/UserModel.js';
import { v4 as uuidv4 } from "uuid";
import { comparePassword, hashPassword } from '../utils/bcrypt.js';
const router = express.Router()

router.post("/", async(req, res, next) => {
    try {
        req.body.password = hashPassword(req.body.password);
        req.body.verificationCode = uuidv4();
        console.log(req.body)
      const result = await createUser(req.body);
      console.log(result)
  
      if (result?._id) {
        
  
        res.json({
          status: "success",
          message:
            "user register successfully"
        });
        return;
      }
      res.json({
        status: "error",
        message: "unable to create new user, please try again later",
      });
    } catch (error) {
      error.errorCode = 500;
      if (error.message.includes("E11000 duplicate key error collection")) {
        error.errorCode = 200;
        error.message =
          "There is already an account exist associated with this email.";
      }
      next(error);
    }
  });


  router.post("/login", async (req, res, next) => {
    try {
      const { email, password } = req.body;
      // check if email exist
      const result = await findUser({ email });
  
    //   if (result?.status === "inactive") {
    //     return res.json({
    //       status: "error",
    //       message: "User inactive, check your email and verify your account",
    //     });
    //   }
  
      //is password match
  
      if (result?._id) {
        const isPasswordMatch = comparePassword(password, result.password);
  
        if (isPasswordMatch) {
        //  const tokens ={
        //   accessJWT : await signAccessJWT({email}),
        //   refreshJWT : await signRefreshJWT({email})
        //  }
  
          return res.json({
            status: "success",
            message: "Login Successful",
            result,
          });
        }
      }
  
      res.json({
        status: "error",
        message: "Invalid logging details",
      });
    } catch (error) {
      next(error);
    }
  });





export default router;
