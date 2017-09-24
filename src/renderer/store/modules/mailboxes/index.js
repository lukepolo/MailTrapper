import state from "./state";
import * as actions from "./actions";
import * as getters from "./getters";
import * as mutations from "./mutations";

import messages from './../mailbox/messages'

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
  modules : {
      messages
  }
};
