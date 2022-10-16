import AsyncStorage from '@react-native-async-storage/async-storage';

const getUserId = () => JSON.parse(AsyncStorage.getItem("UIDADOCAO"));

const getUser = () => AsyncStorage.getItem("UADOCAO");

const getAdmin = () => JSON.parse(AsyncStorage.getItem("ADMINADOCAO"));

const getDomain = () => AsyncStorage.getItem("DOMADOCAO");

const getToken = () => AsyncStorage.getItem("TKADOCAO");

const getHighlight = () => AsyncStorage.getItem("HIGHLIGHTADOCAO");

const getHighLightSubCat = () => AsyncStorage.getItem("HIGHLIGHTMYTMSUB");

const getStatus = () => AsyncStorage.getItem("SADOCAO");

const getIsFirstLogin = () => JSON.parse(AsyncStorage.getItem("IFLADOCAO"));

const getAnotherUser = () => AsyncStorage.getItem("ANTHUSERADOCAO");

const getAlreadyOnboarding = () =>
  JSON.parse(AsyncStorage.getItem("ALREADONBOARDADOCAO"));

const setDomain = (value) => {
  AsyncStorage.setItem("DOMADOCAO", value);
};

const setUser = (value) => {
  AsyncStorage.setItem("UADOCAO", JSON.stringify(value));
};

const setAdmin = (value) => {
  AsyncStorage.setItem("ADMINADOCAO", JSON.stringify(value));
};

const setToken = (value) => {
  AsyncStorage.setItem("TKADOCAO", value);
};

const setUserId = (value) => {
  AsyncStorage.setItem("UIDADOCAO", value);
};

const setStatus = (value) => {
  AsyncStorage.setItem("SADOCAO", value);
};

const setHightlight = (value) => {
  AsyncStorage.setItem("HIGHLIGHTADOCAO", value);
};

const setHighLightSubCat = (value) => {
  AsyncStorage.setItem("HIGHLIGHTMYTMSUB", value);
};

const setAlreadyOnBoarding = (value) => {
  AsyncStorage.setItem("ALREADONBOARDADOCAO", JSON.stringify(value));
};

const setIsFirstLogin = (value) => {
  AsyncStorage.setItem("IFLADOCAO", value);
};

const setAnotherUser = (value) => {
  AsyncStorage.setItem("ANTHUSERADOCAO", JSON.stringify(value));
};

const dropAnotherUser = () => {
  AsyncStorage.removeItem("ANTHUSERADOCAO");
};

const dropStorage = () => {
  AsyncStorage.clear();
};

export default {
  getUserId,
  getUser,
  getAdmin,
  getDomain,
  getToken,
  getHighlight,
  getHighLightSubCat,
  getStatus,
  getIsFirstLogin,
  getAlreadyOnboarding,
  setUser,
  setAdmin,
  setDomain,
  setToken,
  setHightlight,
  setHighLightSubCat,
  setStatus,
  setAlreadyOnBoarding,
  dropStorage,
  setIsFirstLogin,
  setAnotherUser,
  dropAnotherUser,
  getAnotherUser,
  setUserId
};
