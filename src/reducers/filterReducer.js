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
      const filter = action.content
      state = filter
      return state
    default:
      return state 
  }
}

export default filterReducer