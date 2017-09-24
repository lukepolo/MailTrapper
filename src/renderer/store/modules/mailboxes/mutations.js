const _ = require('lodash')
export const setAll = (state, mailboxes) => {
    if(mailboxes) {
        global.Vue.set(state, 'mailboxes', mailboxes)
    }
};

export const set = (state, mailbox) => {
    global.Vue.set(state, 'mailbox', mailbox)
};

export const add = (state, mailbox) => {
    state.mailboxes.push(mailbox)
};

export const update = (state, mailbox) => {
    global.Vue.set(
        state.mailboxes,
        parseInt(_.findKey(state.mailboxes, { "_id" : mailbox[`_id`] })),
        mailbox
    );
};

export const remove = (state, mailbox) => {
    global.Vue.set(state, "mailboxes", _.reject(state.mailboxes, { "_id" : mailbox }));
};