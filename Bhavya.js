const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

addBtn.addEventListener("click", function () {

    let task = prompt("Enter a new task:");

    if (task === null || task.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    li.appendChild(checkbox);
    li.append(" " + task);

    todoList.appendChild(li);
});