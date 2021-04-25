import axios from "axios";
import Toastr from "../components/common/Toastr";

export const setAuthHeaders = (setLoading = () => null) => {
  axios.defaults.headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-CSRF-TOKEN": document
      .querySelector('[name="csrf-token"]')
      .getAttribute("content"),
  };
  setLoading(false);
};

const successResponse = (res) => {
  if (res) {
    res.success = res.status === 200;
    if (res.data.notice) {
      Toastr.success(res.data.notice);
    }
  }
  return res;
};

const errorResponse = (error) => {
  Toastr.error(
    error.response?.data?.errors ||
      error.response?.data?.notice ||
      error.message ||
      error.notice ||
      "Something went wrong!"
  );
  if (error.response?.status === 423) {
    window.location.href = "/";
  }
  return Promise.reject(error);
};

export const requestIntercepts = () => {
  axios.interceptors.response.use(successResponse, (error) => {
    return errorResponse(error);
  });
};
