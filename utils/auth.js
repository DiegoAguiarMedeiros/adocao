import User from './user';
import Storage from './storage';
import restUsers from '../api/user/rest-user';

const isAuthenticated = async () => {
  const retorno = await restUsers.getAllAcceptPets();
  console.log('retorno', retorno.data.message)

  const user = await User.getUser();
  const status = Boolean(await User.getStatus());
  return user !== null && status === true;
};

const logout = () => (
  Storage.dropStorage()
);

export default {
  isAuthenticated,
  logout,
};
