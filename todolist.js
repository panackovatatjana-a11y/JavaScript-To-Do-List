//----------------------------------------
// 1. Select DOM elements
//----------------------------------------

const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

//---------------------------------------------------
// 2. Function to add a new task
//---------------------------------------------------

function addTask() {
    const taskText = taskInput.value.trim();

    // Prevent empty tasks
    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    // Create a new <li> element
    const li = document.createElement("li");
    li.textContent = taskText;

    // Add class for styling
    li.style.cursor = "pointer";

    // Click to remove task
    li.addEventListener("click", function () {
        li.remove();
    });

    // Double-click to mark as completed
    li.addEventListener("dblclick", function () {
        li.style.textDecoration = "line-through";
    });

    // Append the new task to the list
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";
}

//------------------------------------------------
// 3. Event listener for the Add Task button
//------------------------------------------------

addTaskButton.addEventListener("click", addTask);

//--------------------------------------------------
// 4. Optional: Add task with Enter key
//--------------------------------------------------

taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});




























