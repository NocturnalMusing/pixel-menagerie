import api from './api-helper';

export const readAllSpecies = async () => {
  const resp = await api.get('/species');
  return resp.data;
}