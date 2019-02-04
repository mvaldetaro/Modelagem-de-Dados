export const bindState = (reducer) => (state, action) => {
  if (action.type === '@@INIT' || action.type === 'RESET_STATE') {
    console.log('init!');
  }

  return reducer(state, action);
}

export default bindState;