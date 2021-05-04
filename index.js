let form = document.querySelector(".add")
form.addEventListener("click", addToPending);
let allTodos = [];
let counter = 1;
let ha = document.createElement("div");
let allPending = [];

localStorage.setItem("div", ha);

function deleteItem(e, main) {
    let index = allTodos.indexOf(main.classList[1])
    allTodos.splice(index, 1);
    main.remove();
}

function addToComplete(e, main) {
    let complete = document.querySelector(".completed-task");
    console.log(complete);
    let index = allPending.indexOf(complete);
    allPending.splice(index);
    complete.append(main);
}

function addToPending(e) {
    e.preventDefault();
    let pending = document.querySelector(".pending-task");
    let text = document.querySelector(".text-field").value;
    addTask(text, pending);
    document.querySelector(".text-field").value = "";
    allTodos.forEach(elem => {
        let deleting = document.querySelector(`.${elem}`);
        let a = deleting.querySelector(".delete")
        let b = deleting.querySelector(".complete");
        a.addEventListener("click", ((e) => deleteItem(e, deleting)));
        b.addEventListener("click", ((e) => addToComplete(e, deleting)))
    })
}

function addTask(text, pending) {
    if (text.length === 0) return;
    let task = document.createElement("div");
    task.classList.add("tasks");
    task.classList.add(`elem-${counter}`);
    allTodos.push(`elem-${counter}`);
    counter++;
    let todos = document.createElement("div");
    todos.classList.add("todos");
    let p = document.createElement("p");
    p.innerText = text;
    todos.append(p);
    todos.append(getActions());
    task.append(todos);
    allPending.push(task);
    pending.append(task);
}

function getActions() {
    let action = document.createElement("div");
    action.classList.add("actions");
    action.append(getDelete());
    action.append(getComplete());
    return action;
}

function getDelete() {
    let del = document.createElement("div");
    del.classList.add("icon");
    del.classList.add("delete");
    del.innerText = "-";
    return del;
}

function getComplete() {
    let comp = document.createElement("div");
    comp.classList.add("icon");
    comp.classList.add("complete");
    comp.innerText = "+";
    return comp;
}