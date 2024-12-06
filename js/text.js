const input = document.querySelector("input");
const ul = document.querySelector("ul");
const btn = document.querySelector("button");
const error = document.querySelector(".error");

function addTask(task) {
    if (task === '') {
        error.style.display = "block";
    }else {
        let li = document.createElement("li");
        li.innerHTML = task;
        ul.appendChild(li);
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = '';
    saveData();
}

btn.addEventListener("click", () => {
    addTask(input.value);
})

ul.addEventListener("click", (e) => {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData() {
    localStorage.setItem("data", ul.innerHTML);
}

function showTask() {
    ul.innerHTML = localStorage.getItem("data");
}
showTask();

