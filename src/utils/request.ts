import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  Cancel
} from "axios";
import { setup } from "axios-cache-adapter";
import API_CONFIG from "../config/api.json";

// Create `axios` instance with pre-configured `axios-cache-adapter`
const api = setup({
  baseURL: "https://fortniteapi.io",
  cache: {
    maxAge: 60 * 1000
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

const handleRequest = (config: AxiosRequestConfig) => {
  const source = axios.CancelToken.source();
  let loading = true;
  return {
    cancel: () => (loading ? source.cancel() : undefined),
    isLoading: () => loading,
    request: new Promise<AxiosResponse>((resolve, reject) => {
      const requestConfig = { ...config, cancelToken: source.token };
      const requestName = `[${config.method || "GET"}] ${config.url}`;
      api.request(requestConfig).then(
        (response: AxiosResponse) => {
          loading = false;
          console.log(requestName, { config, response });
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

export default (config: AxiosRequestConfig | AxiosRequestConfig[]) => {
  if (Array.isArray(config)) {
    const requests = config.map(c => handleRequest(c));
    return {
      cancel: () => requests.map(({ cancel }) => cancel()),
      isLoading: () => requests.some(({ isLoading }) => isLoading()),
      request: Promise.all<AxiosResponse>(
        requests.map(({ request }) => request)
      )
    };
  }
  return handleRequest(config);
};
