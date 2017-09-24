export const setAll = (state, {mailbox, messages}) => {
    if(messages) {
        global.Vue.set(state.messages, mailbox, messages)
    }
};

export const set = (state, message) => {
    global.Vue.set(state, 'message', message)
};

export const add = (state, message) => {
    state.messages[message.mailbox].unshift(message)
}