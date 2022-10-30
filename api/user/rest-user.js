import HttpClient from "../http-client";
import { id } from "../helper-client";
const getUser = () => HttpClient.get(`users?userId=${id}`);

const getAllUser = () => HttpClient.get("users/all");

const putRecoveryPassword = (value) =>
  HttpClient.put("users/recoverPassword", { companyEmail: value });

const putUsers = (values) => {
  return HttpClient.put(`users?userId=${id}`, values);
};

const postUsers = (values) => {
  return HttpClient.post("users", values);
};

const putUsersComplement = (id, values) => {
  return HttpClient.put(`usersComplement?userId=${id}`, values);
};
const putUsersActive = (id, values) => {
  HttpClient.put(`users?userId=${id}`, { active: values });
};
const userAcceptPet = (petId) => {
  return HttpClient.post(`/userAcceptPet`, { pet: petId });
};
const userNotAcceptPet = (petId) => {
  return HttpClient.post(`userNotAcceptPet`, { pet: petId });
};
export default {
  putRecoveryPassword,
  putUsersComplement,
  putUsers,
  putUsersActive,
  getAllUser,
  postUsers,
  getUser,
  userAcceptPet,
  userNotAcceptPet
};
