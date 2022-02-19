import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://localhost:7076/api/";

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  delete: (url: string) => axios.post(url).then(responseBody),
};

const Catalog = {
  list : () => requests.get('products'),
  details: (id: number) => requests.get(`products/${id}`)
}

const TestErrors = {
  get400Error: () => requests.get('buggy/bad-request'),
  get401Error: () => requests.get('buggy/unauthorized'),
  get404Error: () => requests.get('Buggy/not-found'),
  get500Error: () => requests.get('Buggy/server-error'),
  getValidationError: () => requests.get('buggy/validation-error'),
}

// const toastErrors = (codeNumber: number, codeText: string) => {
//   switch (codeNumber) {
//     case 400: 
//       toast.error(codeText)!

//   }
// }
const agent = {
  Catalog,
  TestErrors
}

export default agent;