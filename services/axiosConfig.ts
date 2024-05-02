import { PATH_NAME } from "@/routes";
import { getToken } from "@/src/utils/myCookies";
import axios from "axios";
import { redirect } from "next/navigation";

const axiosService = async () => {
  const token = await getToken();

  console.log("token:", token);

  const axiosConfig = axios.create({
    baseURL: "/actions/",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  // Add a request interceptor
  axiosConfig.interceptors.request.use(
    function (config) {
      // Do something before request is sent

      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  axiosConfig.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );
  return axiosConfig;
};

export default axiosService;
