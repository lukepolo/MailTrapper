export const get = ({ commit }, trap) => {
    database.connection('messages').createIndex({
        index: {fields: ['date', 'trap']},
    }).then(() => {
        database.connection('messages').find({
            selector: {
                date : {$gt: null},
                trap: trap,
            },
            sort: [{
                'date' : 'desc'
            }]
        }).then((results) => {
            commit('setAll', {
                trap : trap,
                messages : results.docs,
            })
        });
    })
}

export const show = ({ commit }, message) => {

    let foundMessage = null;

    return database.connection('messages').get(message).then((doc) => {
        doc.read = true
        foundMessage = doc;
        return database.connection('messages').put(doc);
    }).then(() => {
        commit('update', foundMessage)
        commit('set', foundMessage)
    });
}

