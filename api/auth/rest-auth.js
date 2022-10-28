import HttpClient from '../http-client';

const postAuth = (data) => HttpClient.post('usersAuth', data);

export default {
  postAuth,
};
