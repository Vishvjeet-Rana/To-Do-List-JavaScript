const taskInput = document.querySelector(".task-input");
const addBtn = document.querySelector(".add-button");
const todoItemArea = document.querySelector(".todo-items");

// pop-up message
function showPopup(message) {
  popup.textContent = message; // Set the message text
  popup.style.display = "block"; // Show the popup
  popup.style.opacity = "1"; // Ensure it’s visible

  // Hide the popup after 2 seconds
  setTimeout(() => {
    popup.style.opacity = "0"; // Fade out
    setTimeout(() => {
      popup.style.display = "none"; // Hide after fading out
    }, 500); // Wait for fade out before hiding
  }, 1000); // Show for 2 seconds
}

// adding task through add button
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "" || taskText === " ") {
    showPopup("Please enter a task first."); // Show the popup instead of alert
    return;
  }

  // the div which shows our task after adding it
  const taskDiv = document.createElement("div");

  taskDiv.classList.add("task");

  // the div which contains checkbox and label
  const taskContainer = document.createElement("div");
  taskContainer.classList.add("checkbox-input");

  // making checkbox
  const checkboxInput = document.createElement("input");
  checkboxInput.type = "checkbox";
  checkboxInput.id = `task${Date.now()}`;
  checkboxInput.classList.add("checkboxinput");

  // making label
  const label = document.createElement("label");
  label.htmlFor = checkboxInput.id;
  label.textContent = taskText;
  label.classList.add("labelClass");

  taskContainer.appendChild(checkboxInput);
  taskContainer.appendChild(label);

  // delete button
  const dltButton = document.createElement("button");
  dltButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
  dltButton.classList.add("dlt-button", "dlt-button");

  taskDiv.appendChild(taskContainer);
  taskDiv.appendChild(dltButton);

  todoItemArea.appendChild(taskDiv);

  // after clearning making it ready for next todo's entry
  taskInput.value = "";

  taskDiv.style.animation = " addButtonAnimation 0.8s ease 0.5s 1 normal";

  // dlt button listener
  dltButton.addEventListener("click", function () {
    taskDiv.style.animation = "dltButtonAnimation 1s ease 0.5s 1 normal";

    setTimeout(() => {
      todoItemArea.removeChild(taskDiv);
    }, 1000);
  });

  // for checking the tasks
  checkboxInput.addEventListener("click", function () {
    label.classList.toggle("strikethrough");
  });
}

// add button listener
addBtn.addEventListener("click", addTask);

// optional : tasks will be added after pressing the Enter key
taskInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});
