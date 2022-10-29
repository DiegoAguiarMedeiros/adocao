import Storage from "./storage";

const getUser = () => Storage.getUser();

const getUserId = () => Storage.getUserId();

const getUserRegisterCompleted = () => Storage.getUserRegisterCompleted();

const getAdmin = () => Storage.getAdmin();

const getUserDomain = () => Storage.getDomain();

const getUserToken = () => Storage.getToken();

const getHighlight = () => Storage.getHighlight();

const getHighLightSubCat = () => Storage.getHighLightSubCat();

const getStatus = () => Storage.getStatus();

const getIsFirstLogin = () => Storage.getIsFirstLogin();

const setDomainAndUser = ({ user }) => {

  const {
    _id,
    name,
    email,
    active,
    admin,
    registerCompleted,
  } = user;
  Storage.setUserRegisterCompleted(registerCompleted);
  Storage.setUserId(_id);
  Storage.setAdmin(admin);
  Storage.setUser({
    name,
    email,
  });
  Storage.setStatus(active);
};

const setHighlight = (user) => {
  const { highlightsCategory } = user;
  Storage.setHightlight(highlightsCategory);
};

const setHighLightSubCat = (user) => {
  const { userHighSubcategory } = user;
  Storage.setHighLightSubCat(userHighSubcategory);
};

const setUserToken = (token) => {
  Storage.setToken(token);
};
const setUserId = (id) => {
  Storage.setUserId(id);
};

const setIsFirstLogin = (user) => {
  const { isFirstLogin } = user;
  Storage.setIsFirstLogin(isFirstLogin);
};

const setUserData = (data) => {
  setUserToken(data.token);
  setIsFirstLogin(data.user);
};



const clearUserSession = () => {
  Storage.dropStorage();
};

export default {
  getUser,
  getUserId,
  getAdmin,
  getUserDomain,
  getUserToken,
  getHighlight,
  getHighLightSubCat,
  getStatus,
  getIsFirstLogin,
  clearUserSession,
  setUserData,
  setDomainAndUser,
  setUserId,
  getUserRegisterCompleted
};
