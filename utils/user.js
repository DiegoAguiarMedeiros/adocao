import Storage from "./storage";

const getUser = () => Storage.getUser();

const getUserId = () => Storage.getUserId();

const getAdmin = () => Storage.getAdmin();

const getUserDomain = () => Storage.getDomain();

const getUserToken = () => Storage.getToken();

const getHighlight = () => Storage.getHighlight();

const getHighLightSubCat = () => Storage.getHighLightSubCat();

const getStatus = () => Storage.getStatus();

const getIsFirstLogin = () => Storage.getIsFirstLogin();

const setDomainAndUser = (user) => {
  const {
    userFirstName,
    userLastName,
    companyEmail,
    subDomain,
    active,
    admin,
    CEP,
    CNPJ,
    addressComplement,
    addressNumber,
    city,
    companyName,
    fantasyName,
    operation,
    state,
    stateRegister,
    street,
    userEmail,
    userPhone,
  } = user;
  Storage.setDomain(subDomain);
  Storage.setAdmin(admin);
  Storage.setUser({
    CEP,
    CNPJ,
    addressComplement,
    addressNumber,
    city,
    companyName,
    fantasyName,
    operation,
    state,
    stateRegister,
    street,
    userEmail,
    userPhone,
    userFirstName,
    userLastName,
    companyEmail,
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
  setUserId
};
