import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: require("@/views/Home"),
      children: [
        {
          path: "trap/:trap",
          name: "trap",
          components: {
            default: require("./../views/components/Trap"),
            messages: require("./../views/components/Messages")
          }
        },
        {
          path: "trap/:trap/message/:message",
          name: "message",
          components: {
            default: require("./../views/components/Message"),
            messages: require("./../views/components/Messages")
          }
        }
      ]
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
