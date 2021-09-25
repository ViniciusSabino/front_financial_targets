import instance from './index';
import config from '../../../config';

const { releasesAPI } = config.apis;

const listReleasesByPeriod = async (initialDate, endDate) => {
  const { data } = await instance.get(releasesAPI.basePath, {
    headers: {
      'initial-date': initialDate,
      'end-date': endDate,
    },
  });

  return data;
};

export default { listReleasesByPeriod };
