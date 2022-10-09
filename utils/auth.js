import User from './user';
import Storage from './storage';

const isAuthenticated = () => {
  const user = User.getUser();
  const status = User.getStatus();
  return user !== null && status === true;
};

const logout = () => (
  Storage.dropStorage()
);

export default {
  isAuthenticated,
  logout,
};
