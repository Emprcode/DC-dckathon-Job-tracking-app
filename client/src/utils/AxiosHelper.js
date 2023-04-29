import axios from "axios";

const rootUrl = "http://localhost:8000/api/v1";
const userUrl = rootUrl + "/user";

export const createUser = (formData) => {
  try {
    return axios.post(userUrl, formData);
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
