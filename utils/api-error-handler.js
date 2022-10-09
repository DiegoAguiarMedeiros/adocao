const isHttpError = (error) => (
  error.response !== undefined || error.request !== undefined
);

const handleResponseError = (error) => {
  const { response } = error;
  return {
    code: response.status,
    message: response.data.message,
  };
};

const handleRequestError = (error) => {
  const { request, message } = error;
  return {
    code: request.status,
    message: message || error.message,
  };
};

const handleHttpError = (error) => {
  return (error.response && error.response.data) ? handleResponseError(error) : handleRequestError(error)
};

const handleJSError = (error) => {
  const { message } = error;
  return {
    message,
  };
};

const handleError = (error) => {
  if (isHttpError(error)) {
    return handleHttpError(error);
  }
  return handleJSError(error);
};

export default {
  handleError,
  handleJSError,
};
