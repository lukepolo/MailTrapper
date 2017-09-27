const uuidv1 = require("uuid/v1");

export const get = ({ commit }) => {
  // // TODO - we need todo pagination here
  database
    .connection("traps")
    .allDocs({
      include_docs: true,
      attachments: true
    })
    .then(function(result) {
      commit(
        "setAll",
        _.map(result.rows, function(row) {
          return row.doc;
        })
      );
    });
};

export const show = ({ commit }, trap) => {
  database
    .connection("traps")
    .get(trap)
    .then(trap => {
      commit("set", trap);
    });
};

export const create = ({ commit }) => {
  let usernameAndPass = uuidv1();

  let trap = {
    name: "New Trap",
    username: usernameAndPass,
    password: usernameAndPass
  };

  database.connection("traps").post(trap, function callback(err, result) {
    trap[`_id`] = result.id;
    commit("add", _.merge(trap, result));
  });
};

export const update = ({ commit }, { trap, form }) => {
  return database
    .connection("traps")
    .get(trap)
    .then(doc => {
      doc.name = form.name;
      return database.connection("traps").put(doc);
    })
    .then(() => {
      database
        .connection("traps")
        .get(trap)
        .then(doc => {
          commit("update", doc);
          return doc;
        });
    });
};

export const remove = ({ commit }, trap) => {
  return database
    .connection("traps")
    .get(trap)
    .then(doc => {
      return database.connection("traps").remove(doc);
    })
    .then(() => {
      commit("remove", trap);
      commit("set", null);
    });
};
