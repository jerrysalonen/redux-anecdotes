const initialState = ''

export const setMessage = (content, time) => {
  return async dispatch => {
    dispatch({
      type: 'MESSAGE',
      content
    })
    time = time * 1000
    setTimeout(() => {
      dispatch({
        type: 'MESSAGE',
        content: ''
      })
    }, time)
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