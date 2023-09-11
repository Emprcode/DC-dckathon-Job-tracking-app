import axios from "axios";

const rootUrl =
  process.env.NODE_ENV === "production"
    ? "/api/v1"
    : "http://localhost:8000/api/v1";
const userUrl = rootUrl + "/user";
const loginUrl = rootUrl + "/user/login";
const addJobUrl = rootUrl + "/job";
const profileUrl = rootUrl + "/profile";
const CommentsUrl = rootUrl + "/comment";

const getUseridfromStorage = () => {
  const user = sessionStorage.getItem("loginId");
  if (user) {
    const userObj = JSON.parse(user);
    return userObj?._id;
  }
  return;
};
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
export const addProfile = async (formData) => {
  try {
    const userId = getUseridfromStorage();

    const { data } = await axios.post(profileUrl, formData, {
      headers: {
        Authorization: userId,
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
export const getProfile = async () => {
  try {
    const userId = getUseridfromStorage();
    const { data } = await axios.get(profileUrl, {
      headers: {
        Authorization: userId,
      },
    });
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

export const addComments = async (obj) => {
  try {
    console.log(obj);
    const { data } = await axios.post(CommentsUrl, obj);

    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
export const getComments = async (idJob) => {
  try {
    const { data } = await axios.get(CommentsUrl, {
      headers: { Authorization: idJob },
    });
    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
