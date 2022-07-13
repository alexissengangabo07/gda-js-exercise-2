/*  ========== ==== */
/*  MONEY CHANGE  */


const icon = document.querySelector('.mdi-menu');
const links = document.querySelector('#menu-links');
const button = document.querySelector('#btn');
const body = document.querySelector('body');

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
button.addEventListener('click', function(e){

    body.style.background = 'red'
    body.style.background = 'green'
    body.style.background = 'white'
    body.style.background = 'yellow'
    body.style.background = 'blue'
    body.style.background = 'black'
    body.style.background = 'orange'
    body.style.background = 'violet'
    body.style.background = 'gray'
    body.style.background = 'marron'
  
})

