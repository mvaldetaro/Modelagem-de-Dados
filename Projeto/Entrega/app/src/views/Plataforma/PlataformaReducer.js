const INITIAL_STATE = {
  currentPlataforma: {}
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "GET_CURRENT_PLATAFORMA":
      return {
        ...state,
        currentPlataforma: action.payload
      }
    default:
      return state
  }
}