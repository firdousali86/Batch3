import {
  kApiUrlEndpoint,
  kApiUrlEndpoint3,
  API_TIMEOUT,
} from '../config/WebServices';
// import {fetch} from 'react-native-ssl-pinning';

import {create} from 'apisauce';
const api = create({
  baseURL: kApiUrlEndpoint3,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Cache-Control': 'no-cache',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzJjOTYzNjY5NzU3OGEwNTI5MWM4NWE5MWYyNmFmMSIsInN1YiI6IjY1NDM4MzM0ZTFhZDc5MDE0YmQyMGM3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.huykm4g9c8OAVMFXGW498rMtzZJT2XYKunRmZvinG70',
  },
  timeout: API_TIMEOUT,
});

class ApiHelper {
  async get(url, data, headers = {}) {
    const response = await api.get(url, data, {headers: headers});

    return new Promise((resolve, reject) => {
      this.handlePromise(resolve, reject, response);
    });
  }

  async post(url, data, headers = {}) {
    const response = await api.post(url, data, {headers: headers});

    return new Promise((resolve, reject) => {
      this.handlePromise(resolve, reject, response);
    });
  }

  handlePromise = (resolve, reject, response) => {
    if (response.error) {
      if (response.error.code === 'LOGIN_FAILED') {
        reject('any error string');
      } else if (response.error.code === 'NETWORK_ISSUE') {
        reject('any error string');
      }
    } else {
      resolve(response);
    }
  };
}

export default new ApiHelper();
