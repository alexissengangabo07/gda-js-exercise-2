

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

// vérification age

let btnValide = document.querySelector("#btn-valide");

function verifieAge(){
    let age = document.querySelector("#age").value;
    if (age >= 18){
        alert("vous êtes majeur")
    }else{
        alert("vous êtes mineur") 
    }
}

btnValide.addEventListener("click", () => {
    verifieAge()
})
