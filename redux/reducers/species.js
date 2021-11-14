const species = (state = {
  species: []
}, action) => {
  switch (action.type) {
    case 'SET_SPECIES':
      return {
        ...state,
        species: action.species
      };
    default:
      return state;
  }
}

export default species