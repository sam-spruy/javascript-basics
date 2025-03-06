const button = document.getElementById("addTask");
const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

let task = []; // Array to store tasks

button.addEventListener("click", () => {
    let userInput = input.value.trim();

    if (userInput === "") {
        console.log("No input entered");
        return;
    }

    task.push(userInput);
    console.log("Updated Task List:", task);

    // Create a new list item
    let li = document.createElement("li");
    li.textContent = userInput;

    // Add remove button
    let removeBtn = document.createElement("button");
    removeBtn.textContent = "❌";
    removeBtn.style.marginLeft = "10px";
    removeBtn.addEventListener("click", () => removeTask(userInput, li));

    li.appendChild(removeBtn);
    list.appendChild(li);

    input.value = ""; // Clear input field
});

// Function to remove a task using list.removeChild()
function removeTask(taskName, listItem) {
    // Remove from array
    task = task.filter(t => t !== taskName);
    console.log("Updated Task List after removal:", task);

    // Remove from UI using list.removeChild()
    list.removeChild(listItem);
}
