import ProfileSchema from "./ProfileSchema.js";

//create new user
export const addProfile = (obj) => {
  return ProfileSchema(obj).save();
};

export const getSingleProfile = (userId) => {
  return ProfileSchema.findOne(userId);
};

//find by filter and update
export const findProfileAndUpdate = ({ filter, obj }) => {
  return ProfileSchema.findOneAndUpdate(filter, obj, { new: true });
};

//delete
export const deleteSingleProfileSection = (_id) => {
  return ProfileSchema.findByIdAndDelete(_id);
};
