export const setAll = (state, traps) => {
  if (traps) {
    Vue.set(state, "traps", traps);
  }
};

export const set = (state, trap) => {
  Vue.set(state, "trap", trap);
};

export const add = (state, trap) => {
  state.traps.push(trap);
};

export const update = (state, trap) => {
  let foundKey = parseInt(_.findKey(state.traps, { _id: trap[`_id`] }));
  if (_.isNumber(foundKey)) {
    Vue.set(state, "trap", trap);
    Vue.set(state.traps, foundKey, trap);
  }
};

export const remove = (state, trap) => {
  Vue.set(state, "traps", _.reject(state.traps, { _id: trap }));
};
