const INITIAL_STATE = {
  currentGame: {}
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "GET_CURRENT_GAME":
      return {
        ...state,
        currentGame: action.payload
      }
    default:
      return state
  }
}