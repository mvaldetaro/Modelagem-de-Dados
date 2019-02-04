const INITIAL_STATE = {
  categories: [],
  tags: [],
  plataformas: [],
  generos: [],
  releases: []
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_CATEGORIES':
      return {
        ...state,
        categories: action.payload
      }
    case 'SET_TAGS':
      return {
        ...state,
        tags: action.payload
      }
    case 'SET_PLATAFORMAS':
      return {
        ...state,
        plataformas: action.payload
      }
    case 'SET_GENEROS':
      return {
        ...state,
        generos: action.payload
      }
    case 'SET_RELEASES':
      return {
        ...state,
        releases: action.payload
      }
    default:
      return state
  }
}