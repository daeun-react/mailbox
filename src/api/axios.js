import axios from "axios";

export const getList = async () => {
  console.log(process.env.NODE_ENV, process.env.REACT_APP_API_URL);
  if (process.env.NODE_ENV === "development") {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/mails`);
    return response.data;
  } else {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}`);
    // console.log(response.data.mails);
    return response.data.mails;
  }
};

export const getListById = async (id) => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}/mails/${id}`
  );
  return response.data;
};
