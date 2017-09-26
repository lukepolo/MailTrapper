import { now, diff, parseDate } from "./date-time";

global.Vue.mixin({
  methods: {
    now,
    diff,
    parseDate
  }
});
