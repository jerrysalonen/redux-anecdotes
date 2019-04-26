import _ from 'lodash'

export const setFilter = (content) => {
  return {
    type: 'FILTER',
    content
  }
}

const filterReducer = (state = [], action) => {

  switch (action.type) {
    case 'FILTER':
      let filtered = _.cloneDeep(action.content)
      return filtered
    default:
      return state 
  }
}

export default filterReducer