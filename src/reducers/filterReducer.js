const initialState = []

export const setFilter = (content) => {
  return {
    type: 'FILTER',
    content
  }
}

const filterReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'FILTER':
      return action.content
    default:
      return state 
  }
}

export default filterReducer