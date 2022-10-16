import User from './user';
import Storage from './storage';

const isAuthenticated = () => {
  const user = User.getUser();
  const status = User.getStatus();
  console.log('user',user)
  console.log('status',status)
  return user !== null && status === true;
};

const logout = () => (
  Storage.dropStorage()
);

export default {
  isAuthenticated,
  logout,
};
