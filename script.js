const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");
function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes") || "";
  notes = document.querySelectorAll(".input-box");
  notes.forEach((nt) => {
    nt.addEventListener("keyup", updateStorage);
  });
}
showNotes();
function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}
createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "images/delete.png";
  img.className = "delete-icon";
  notesContainer.appendChild(inputBox).appendChild(img);
  inputBox.addEventListener("keyup", updateStorage);
});

notesContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG" && e.target.className === "delete-icon") {
    e.target.parentElement.remove();
    updateStorage();
  }
});
