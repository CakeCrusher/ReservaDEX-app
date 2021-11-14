import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk'

import organization from './reducers/organization'
import imageUri from './reducers/imageUri'
import species from './reducers/species'

const combinedReducers = combineReducers({
  organization: organization,
  imageUri: imageUri,
  species: species,
})

const store = createStore(
  combinedReducers,
  applyMiddleware(thunk)
)

export { store }