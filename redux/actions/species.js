import species from "../reducers/species";

export const setSpecies = (payload) => ({
  type: 'SET_SPECIES',
  species: payload.species
})