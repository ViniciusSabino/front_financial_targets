import axios from 'axios';

import config from '../../config';

const instance = axios.create({
  baseURL: `${config.apis.accountsAPI.url}/api`,
  timeout: 7000,
});

export default instance;
