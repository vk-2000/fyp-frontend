/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable consistent-return */
import axios from 'axios';

const makeRequest = async (apiEndPoint, dynamicConfig) => {
  const requestDetails = {
    url: apiEndPoint.url,
    method: apiEndPoint.method,
    ...dynamicConfig,
  };
  const { data } = await axios(requestDetails);
  return data;
};
export default makeRequest;
