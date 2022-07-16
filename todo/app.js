/*  ==================*/
/*  PAGE  ANNIVERSAIRE */
/*  =================  */

const icon = document.querySelector(".mdi-menu");
const links = document.querySelector("#menu-links");

const afficherMenu = () => {
  if (links.style.display == "none" || links.style.display == "") {
    links.style.display = "flex";
  } else {
    links.style.display = "none";
  }
};

icon.addEventListener("click", () => {
  afficherMenu();
});

//My JS
let input = document.querySelector("#entre-list");
let add = document.querySelector(".add-list");
let tache = document.querySelector(".taches");


add.addEventListener("click", () => {
  if (input.value.trim() != 0) {
    let newItem = document.createElement("div");
    newItem.classList.add("item");
    newItem.innerHTML = `<p><input type="checkbox" class="coche"> ${input.value}<p><div><i class="fa-solid fa-trash-can"></i></div>`;
    tache.appendChild(newItem);
    input.value = "";
  } else {
    alert("Ajouter une tache");
  }
});
tache.addEventListener("click", (e) => {
  if (e.target.classList.contains("coche")) {
    e.target.parentElement.parentElement.classList.toggle("completed");
  }
});

tache.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-trash-can")) {
    e.target.parentElement.parentElement.remove();
  }
});
