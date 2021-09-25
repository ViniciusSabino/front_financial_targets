import axios from 'axios';

import config from '../../../config';

const { releasesAPI } = config.apis;

let instance;

const createAxiosInstance = () => {
  if (instance) return instance;

  instance = axios.create({
    baseURL: releasesAPI.url,
    timeout: 1000,
  });

  return instance;
};

export default createAxiosInstance();
