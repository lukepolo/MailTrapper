import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: require("@views/home/Home"),
      children: [
        {
          path: "trap/:trap",
          name: "trap",
          components: {
            default: require("@views/home/components/Trap"),
            messages: require("@views/home/components/Messages")
          }
        },
        {
          path: "trap/:trap/message/:message",
          name: "message",
          components: {
            default: require("@views/home/components/Message"),
            messages: require("@views/home/components/Messages")
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
