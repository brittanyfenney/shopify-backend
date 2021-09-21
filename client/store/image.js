import axios from 'axios'

// ACTION TYPES
const GOT_IMAGES = 'GOT_IMAGES'
const ADDED_IMAGE = 'ADDED_IMAGE'

// ACTION CREATORS
const gotImages = images => ({type: GOT_IMAGES, images})
const addedImage = image => ({type: ADDED_IMAGE, image})

// THUNK CREATORS
export const getImages = () => async dispatch => {
  const response = await axios.get('/api/images')
  const images = response.data
  return dispatch(gotImages(images))
}

export const addImage = url => async dispatch => {
  const response = await axios.post('/api/images', url)
  if (response.status === 201) {
    return dispatch(addedImage(url))
  }
}

// REDUCER
export default function(state = {}, action) {
  switch (action.type) {
    case GOT_IMAGES:
      return action.images
    case ADDED_IMAGE:
        return [...state, action.image]
    default:
      return state;
  }
}
