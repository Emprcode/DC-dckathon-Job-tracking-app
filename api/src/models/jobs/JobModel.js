import JobSchema from "./JobSchema.js";

//create new user
export const postJob = (obj) => {
  return JobSchema(obj).save();
};

export const getAllJObs = () => {
  return JobSchema.find();
};

export const getSingleJob = (id) => {
  return JobSchema.findById(id);
};

//find by filter and update
export const findJobAndUpdate = (_id, obj) => {
  return JobSchema.findByIdAndUpdate(_id, obj, { new: true });
};

//delete

export const deleteJob = ({ _id }) => {
  return JobSchema.findByIdAndDelete(_id);
};

