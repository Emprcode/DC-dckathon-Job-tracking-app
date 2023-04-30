import CommentSchema from "./CommentSchema.js";



export const addComment = (obj) => {
  return CommentSchema(obj).save();
};

export const getComments = (_id) => {
  // console.log(_id)
  return CommentSchema.find(_id);
  
};
