export const setAll = (state, { trap, messages }) => {
  if (messages) {
    Vue.set(state.messages, trap, messages);
  }
};

export const set = (state, message) => {
  Vue.set(state, "message", message);
};

export const update = (state, message) => {
  let foundKey = parseInt(
    _.findKey(state.messages[message.trap], { _id: message[`_id`] })
  );
  if (_.isNumber(foundKey)) {
    Vue.set(state.messages[message.trap], foundKey, message);
  }
};

export const add = (state, message) => {
  state.messages[message.trap].unshift(message);
};
