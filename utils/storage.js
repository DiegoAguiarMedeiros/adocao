import AsyncStorage from '@react-native-async-storage/async-storage';

const _retrieveData = async (key) => {
  try {
    const data = await AsyncStorage.getItem(key);
    return data;
  } catch (error) {
    console.log(error);
  }
}

const getUserId = () => _retrieveData("UIDADOCAO");

const getUser = () => _retrieveData("UADOCAO");

const getAdmin = () => _retrieveData("ADMINADOCAO");

const getDomain = () => _retrieveData("DOMADOCAO");

const getToken = () => _retrieveData("TKADOCAO");

const getHighlight = () => _retrieveData("HIGHLIGHTADOCAO");

const getHighLightSubCat = () => _retrieveData("HIGHLIGHTMYTMSUB");

const getStatus = () => _retrieveData("SADOCAO");

const getIsFirstLogin = () => _retrieveData("IFLADOCAO");

const getAnotherUser = () => _retrieveData("ANTHUSERADOCAO");

const getAlreadyOnboarding = () =>
  JSON.parse(_retrieveData("ALREADONBOARDADOCAO"));

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
  AsyncStorage.setItem("SADOCAO", JSON.stringify(value));
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
