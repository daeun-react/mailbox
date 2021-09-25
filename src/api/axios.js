import axios from "axios";

export const getList = async () => {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/mails`);
  return response.data;
};

export const getListById = async (id) => {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/mails/${id}`);
  return response.data;
};
