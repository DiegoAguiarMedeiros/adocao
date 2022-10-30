import HttpClient from "../http-client";


const fetchPet = () => HttpClient.get(`/company/pet/getAll`);


const fetchPetById = (petId) => {
  return HttpClient.get(`/company/pet/getOnePet?id=${petId}`);
};



export default {
  fetchPet,
  fetchPetById,
};