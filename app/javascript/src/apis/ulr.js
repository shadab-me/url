import axios from "axios";

const list = () => axios.get("/urls");
const urlList = () => {
  return list();
};

const newUrl = (payload) => axios.post("/urls");

const createUrl = (payload) => {
  return newUrl(payload);
};

export { createUrl, urlList };
