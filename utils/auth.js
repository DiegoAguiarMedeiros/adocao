import User from './user';
import Storage from './storage';

const isAuthenticated = async () => {
  const user = await User.getUser();
  const status = await User.getStatus();
  return user !== null && status === true;
};

const logout = () => (
  Storage.dropStorage()
);

export default {
  isAuthenticated,
  logout,
};
