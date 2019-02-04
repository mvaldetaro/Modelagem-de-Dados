const INITIAL_STATE = {
  games: [],
  plataformas: [],
  years: years(),
  genero: []
}

function years() {

  var d = new Date();

  let years = [];
  let firstYear = 1970;
  let lastYear = Number(d.getFullYear());

  for (let index = firstYear; index <= lastYear; index++) {
    years.push({id: index, name: index});
  }
  return years;
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "GET_GAME":
      return {
        ...state,
        games: action.payload
      }
    case "GET_CATEGORIES":
      return {
        ...state,
        plataformas: action.payload
      }
    case "GET_GENERO":
      return {
        ...state,
        genero: action.payload
      }
    default:
      return state
  }
}