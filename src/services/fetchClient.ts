import axios, { AxiosRequestConfig } from 'axios';

axios.defaults.baseURL = 'https://api.openweathermap.org/data/2.5';

const wait = (delay) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

type RequestMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE';

function request<T>(
  url: string,
  method: RequestMethod = 'GET',
  data: any = null
): Promise<T> {
  const options: AxiosRequestConfig = { method };

  if (data) {
    options.data = data;

    options.headers = {
      'Content-Type': 'application/json; charset=UTF-8',
    };
  }

  return wait(300)
    .then(() => axios.request<T>({ url, method, data }))
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      throw new Error(err);
    });
}

export const client = {
  get: <T>(url: string) => request<T>(url),
};

// https://api.openweathermap.org/data/2.5/weather?q=Poltava&appid=681f277cd86cc6838a06a70584831740&units=metric
