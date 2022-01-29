var app = new Vue({
  el: "#app",
  data: {
    cheerful_message: "Have a productive day! ;)",
    status: {
      emptyList: false,
      emptyTask: false
    },
    tasks: ["Do the dishes", "Wash my clothes", "Cook lunch", "Study Vue.js"]
  },
  methods: {
    addItem: function () {
      var newTaskInput = document.getElementsByClassName("new-item-input")[0];
      var newTask = newTaskInput.value;

      // Show the emptyTask Message
      if (newTask === "") {
        app.status.emptyTask = true;

        // Hide the emptylist message in order to show
        // only one message at a time.
        if (app.status.emptyList) {
          app.status.emptyList = false;
        }

        return;
      } else {
        app.status.emptyTask = false;
      }

      // Clean the input
      newTaskInput.value = "";

      app.tasks.push(newTask);
      app.checkEmptyList();
    },
    removeItem: function (event) {
      var taskId = event.currentTarget.getAttribute("task-id");

      app.tasks.splice(taskId, 1);

      app.checkEmptyList();
    },
    checkEmptyList: function () {
      if (app.tasks.length == 0) {
        app.status.emptyList = true;
      } else {
        app.status.emptyList = false;
      }
    }
  }
});
