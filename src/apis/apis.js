import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';

export const fetchWebsiteRecords = async () => {
  const response = await axios.get(`${API_BASE_URL}/website-records`);
  return response.data;
};

export const fetchExecutions = async () => {
  const response = await axios.get(`${API_BASE_URL}/executions`);
  return response.data;
};

export const fetchGraphData = async (websiteIds) => {
  const response = await axios.post(`${API_BASE_URL}/graph-data`, { websiteIds });
  return response.data;
};
