document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let taskItem = document.querySelector("#new-task-description");
    console.log(e);
    buildList(taskItem.value);
    form.reset();
  });
});

function buildList(value) {
  // console.log(value)
  let p = document.createElement("p");
  let btn = document.createElement("button");

  btn.textContent = "x";
  p.textContent = value;
  p.appendChild(btn);
  document.querySelector("#list").appendChild(p);
  btn.addEventListener("click", () => {
    document.querySelector("#list").removeChild(p)
  });
}

// function deleteTask() {
//   document.querySelector("#list").removeChild();
// }
