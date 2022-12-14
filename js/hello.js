// createAppの戻り値はVue.jsの機能を提供するVueインスタンス
const app = Vue.createApp({
  data: () => ({
    message: "Hello Vue3.js!!",
    user: {
      name: "miya",
      age: 27,
    },
    colors: ["red", "green"],
  }),
});

// 指定されたHTML要素（id=app)がVue.jsが構築したDOMに置き換えられる＝マウント
app.mount("#app");
