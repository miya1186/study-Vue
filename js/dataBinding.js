const app = Vue.createApp({
  data: () => ({
    message: "Hello Vue.js",
    toggle: true,
    colors: ["Red", "Green", "Blue"],
    user: {
      name: "miya",
      age: 24,
    },
    now: "-",
  }),
  // イベントハンドラはVueインスタンスのmethodsオプションに記載する
  methods: {
    onClick: function () {
      this.now = new Date().toLocaleDateString();
      //   console.log(this.now);
    },
  },
});
//コンポーネント作成
app.component("hello-component", {
  template: "<p>Hello</p>",
});
app.mount("#app");
