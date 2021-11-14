const organization = (state = {
  lat: null,
  lng: null,
  id: null,
  photo: null,
  name: null,
  website: null,
}, action) => {
  switch (action.type) {
    case 'SET_ORGANIZATION':
      return {
        ...state,
        lat: action.lat,
        lng: action.lng,
        id: action.id,
        photo: action.photo,
        name: action.name,
        website: action.website,
      };
    default:
      return state;
  }
}

export default organization