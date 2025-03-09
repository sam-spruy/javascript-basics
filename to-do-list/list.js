const button = document.getElementById("addTask");
const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

function addTask() {
    let li = document.createElement("li");
    document.getElementById("taskInput").value;
    let t = document.createTextNode(input.value);
    li.appendChild(t);
    document.getElementById("taskList").appendChild(li);
    document.getElementById("taskInput").value = "";
}

function removeTask() {
  list.remove()
}
