import HttpClient from '../http-client';

const validateCompanyEmail = (email) => HttpClient.post('/validate/email', { companyEmail: email });

const validateSubDomain = (subDomain) => HttpClient.post('/validate/subDomain', { subDomain });

export default {
  validateCompanyEmail,
  validateSubDomain,
};
