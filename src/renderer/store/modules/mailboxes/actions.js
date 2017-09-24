const _ = require('lodash');
const uuidv1 = require('uuid/v1');

export const get = ({commit}) => {
    // TODO - we need todo pagination here
    global.mailBoxesDb.allDocs({
        include_docs: true,
        attachments: true,
    }).then(function (result) {
        console.info(result)
        commit('setAll', _.map(result.rows, function (row) {
            return row.doc;
        }))
    }).catch(function (err) {
        console.log(err);
    });
}

export const show = ({commit}, mailbox) => {
    global.mailBoxesDb.get(mailbox).then((mailbox) => {
        commit('set', mailbox)
    })
}
export const create = ({commit}) => {

    let mailbox = {
        name: 'New Mailbox',
        username: uuidv1(),
        password: uuidv1(),
    };

    global.mailBoxesDb.post(mailbox, function callback(err, result) {
        if (err) {
            return console.info(err)
        }

        mailbox[`_id`] = result.id

        commit('add', _.merge(mailbox, result))
    });
}

export const update = ({commit}, {mailbox, form}) => {
    return global.mailBoxesDb.get(mailbox).then((doc) => {
        doc.name = form.name
        return global.mailBoxesDb.put(doc);
    }).then(() => {
        global.mailBoxesDb.get(mailbox).then((doc) => {
            commit('update', doc)
            return doc;
        })
    });
}

export const remove = ({commit}, mailbox) => {
    return global.mailBoxesDb.get(mailbox).then((doc) => {
        return global.mailBoxesDb.remove(doc);
    }).then(() => {
        commit('remove', mailbox)
    });
}