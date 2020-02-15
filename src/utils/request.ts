import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  Cancel
} from "axios";
import { setup } from "axios-cache-adapter";
import API_CONFIG from "../config/api.json";

// Create `axios` instance with pre-configured `axios-cache-adapter` attached to it
const api = setup({
  baseURL: "https://fortniteapi.io",
  cache: {
    maxAge: 12 * 1000
  },
  headers: {
    ...API_CONFIG,
    "Content-Type": "application/json"
  }
});

// Response callback
const handleResponse = (response: AxiosResponse) => response.data;
// Error callback
const handleError = (requestError: AxiosError) =>
  Promise.reject(requestError.response);

export default (config: AxiosRequestConfig) => {
  const source = axios.CancelToken.source();
  let loading = true;
  return {
    cancel: () => {
      if (loading) {
        source.cancel();
      }
    },
    isLoading: () => loading,
    request: new Promise<AxiosResponse>((resolve, reject) => {
      const requestConfig = { ...config, cancelToken: source.token };
      const requestName = `[${config.method || "GET"}] ${config.url}`;
      api.request(requestConfig).then(
        (response: AxiosResponse) => {
          loading = false;
          console.info(requestName, { config, response });
          resolve(response);
        },
        (error: AxiosError | Cancel) => {
          loading = false;
          if (axios.isCancel(error)) {
            console.warn(requestName, "(canceled)", { config, error });
          } else {
            console.error(requestName, { config, error });
          }
          reject(error);
        }
      );
    }).then(handleResponse, handleError)
  };
};
