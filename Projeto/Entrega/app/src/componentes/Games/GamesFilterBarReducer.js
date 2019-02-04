const INITIAL_STATE = {
  filter: {}
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SEARCH_GAME":
      return {
        ...state,
        filter: action.payload
      }
    default:
      return state
  }
}