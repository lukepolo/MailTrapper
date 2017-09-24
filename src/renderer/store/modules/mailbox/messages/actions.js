const _ = require('lodash');

export const get = ({ commit }, mailbox) => {
    global.mailDb.createIndex({
        index: {fields: ['date', 'mailbox']},
    }).then(() => {
        global.mailDb.find({
            selector: {
                date : {$gt: null},
                mailbox: mailbox,
            },
            sort: [{
                'date' : 'desc'
            }]
        }).then((results) => {
            commit('setAll', {
                mailbox : mailbox,
                messages : results.docs,
            })
        });
    })
}

export const show = ({ commit }, message) => {
    global.mailDb.get(message).then(function (message) {
        commit('set', message)
    });
}

