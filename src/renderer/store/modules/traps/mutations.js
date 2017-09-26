export const setAll = (state, traps) => {
    if(traps) {
        global.Vue.set(state, 'traps', traps)
    }
};

export const set = (state, trap) => {
    global.Vue.set(state, 'trap', trap)
};

export const add = (state, trap) => {
    state.traps.push(trap)
};

export const update = (state, trap) => {
    global.Vue.set(
        state.traps,
        parseInt(_.findKey(state.traps, { "_id" : trap[`_id`] })),
        trap
    );
    global.Vue.set(state, 'trap', trap)
};

export const remove = (state, trap) => {
    global.Vue.set(state, "traps", _.reject(state.traps, { "_id" : trap }));
};