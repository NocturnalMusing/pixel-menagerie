import api from './api-helper';

export const readAllPets = async () => {
  const resp = await api.get('/pets');
  return resp.data;
}

export const readOnePet = async (id) => {
  const resp = await api.get(`/pets/${id}`);
  return resp.data;
}

export const postPet = async (petData) => {
  const resp = await api.post('/pets', { pet: petData });
  return resp.data;
}

export const putPet = async (id, petData) => {
  const resp = await api.put(`/pets/${id}`, { pet: petData });
  return resp.data;
}

export const destroyPet = async (id) => {
  const resp = await api.delete(`/pets/${id}`);
  return resp;
}

// export const addFlavor = async(flavorId, foodId) => {
//   const resp = await api.put(`/flavors/${flavorId}/foods/${foodId}`);
//   return resp.data;
// }