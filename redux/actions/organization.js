export const setOrganization = (payload) => ({
  type: 'SET_ORGANIZATION',
  lat: payload.lat,
  lng: payload.lng,
  id: payload.id,
  photo: payload.photo,
  name: payload.name,
  website: payload.website,
})