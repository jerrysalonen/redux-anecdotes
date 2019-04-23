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
      const message = action.content
      state = message
      return state
    default:
      return state 
  }
}

export default notificationReducer