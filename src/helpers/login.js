import axios from 'axios';

export const realLogin = (phone, password) => {
  return axios
    .post('http://45.80.149.202:8101/api/users/login/', { phone, password })
    .then((response) => {
      // Assuming the API returns a token or user data on successful login
      return response.data;
    })
    .catch((error) => {
      console.error('Login failed:', error);
      throw new Error(
        error.response && error.response.data && error.response.data.error
          ? error.response.data.error
          : 'Login failed'
      );
    });
};
