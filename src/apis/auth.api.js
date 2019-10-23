import requestAPI from '../utils/request';

const login = (data) => {
  return requestAPI.post('/api/auth/login', data);
};

export default {login};
