import axios from "axios";

const rootUrl = "http://localhost:8000/api/v1";
const userUrl = rootUrl + "/user";
const loginUrl = rootUrl + "/user/login";
const addJobUrl = rootUrl + "/job";

export const createUser = async (formData) => {
  try {
    const { data } = await axios.post(userUrl, formData);
    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
export const loginUser = async (formData) => {
  try {
    const { data } = await axios.post(loginUrl, formData);
    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const addJob = async (formData) => {
  try {
    const { data } = await axios.post(addJobUrl, formData);
    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
export const getAllJob = async () => {
  try {
    const { data } = await axios.get(addJobUrl);
    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const updateJobStatus = async (obj) => {
  try {
    const { data } = await axios.put(addJobUrl, obj);
    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
export const deletedJob = async (obj) => {
  try {
    console.log(obj);
    const { data } = await axios.delete(addJobUrl, { data: obj });

    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
