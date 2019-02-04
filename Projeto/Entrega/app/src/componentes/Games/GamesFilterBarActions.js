/*export function onSearch(e) {
  return {type: 'SEARCH_GAME', payload: e.target.value}
}*/

export function onSearch(data) {

  return {type: 'SEARCH_GAME', payload: data}
}