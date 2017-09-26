import { now, diff, parseDate } from "./date-time";

Vue.mixin({
  methods: {
    now,
    diff,
    parseDate
  }
});
