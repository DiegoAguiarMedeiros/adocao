import HttpClient from '../http-client';

const postAuth = (data) => HttpClient.post('auth', data);

export default {
  postAuth,
};
