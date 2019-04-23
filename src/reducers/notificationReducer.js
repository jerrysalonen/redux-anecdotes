const initialState = ''

export const setMessage = (content) => {
  return {
    type: 'MESSAGE',
    content 
  }
}

const notificationReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'MESSAGE':
      return action.content
    default:
      return state 
  }
}

export default notificationReducer