const _ = require('lodash');

export const setAll = (state, {mailbox, messages}) => {
    if(messages) {
        global.Vue.set(state.messages, mailbox, messages)
    }
};

export const set = (state, message) => {
    global.Vue.set(state, 'message', message)
};

export const update = (state, message) => {
    global.Vue.set(
        state.messages[message.mailbox],
        parseInt(_.findKey(state.messages[message.mailbox], { "_id" : message[`_id`] })),
        message
    );
};


export const add = (state, message) => {
    state.messages[message.mailbox].unshift(message)
}