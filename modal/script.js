/*  =========== */
/*  QUIZ  GAME */
/*  ========= */

const icon = document.querySelector('.mdi-menu');
const links = document.querySelector('#menu-links');

const  afficherMenu = () => {
    if(links.style.display == 'none' || links.style.display == '') {
        links.style.display = 'flex';
    }
    else {
        links.style.display = 'none';
    }
}

icon.addEventListener('click', () => {
   afficherMenu()
});

/*
    YOUR SCRIPT 
*/ 
let buttons = [document.querySelector("#open"), document.querySelector("#close")];
let hidelayer = document.querySelector("#hidelayer");
let mymodal = document.querySelector("#mymodal");
function toggle(todo) {
    if(todo.target == buttons[0]) {
        hidelayer.style.display = "block";
        mymodal.style.display = "block";
    } else {
        hidelayer.style.display = "none";
        mymodal.style.display = "none";
    }
}
buttons[0].addEventListener('click', toggle)
buttons[1].addEventListener('click', toggle)
