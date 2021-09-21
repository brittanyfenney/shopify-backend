import axios from 'axios'

// ACTION TYPES
const GOT_IMAGES = 'GOT_IMAGES'

// ACTION CREATORS
const gotImages = images => ({type: GOT_IMAGES, images})

// THUNK CREATORS
export const getImages = () => async dispatch => {
  const response = await axios.get('/api/images')
  const images = response.data
  return dispatch(gotImages(images))
}

// REDUCER
export default function(state = {}, action) {
  switch (action.type) {
    case GOT_IMAGES:
      return action.images
    default:
      return state;
  }
}
