const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      enterTaskValue: "",
      paragraphIsVisible: true,
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.enterTaskValue);
    },
    showListTasks() {
      this.paragraphIsVisible = !this.paragraphIsVisible;
    },
  },
});
app.mount("#assignment5");
