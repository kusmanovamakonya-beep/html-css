function addTask() {
    let input = document.getElementById("taskInput");
    let text = input.value;

    if (text == "") {
        alert("Тапсырма енгізіңіз!");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        <span onclick="completeTask(this)">${text}</span>
        <button onclick="deleteTask(this)">Жою</button>
    `;

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}

function completeTask(task) {
    task.classList.toggle("done");
}

function deleteTask(button) {
    button.parentElement.remove();
}