/*  ============= */
/*  PAGE  CHRONO*/
/*  ===========  */

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

const decrement = document.querySelector(".decrement");
const reset = document.querySelector(".reset");
const increse = document.querySelector(".increse");
// const counter = document.querySelector(".counter-value");
const counterValue = document.querySelector(".counter-value");
let counteur = 0;
let min = 0;
let max = 11;


// reset.addEventListener('click', function(){
//     if(counteur == min.value && max.value)
// })
decrement.addEventListener('click', function(){
    //console.log(counterValue.innerText);
    if(counteur > min){
        counterValue.innerText = counteur;
        counteur --;
    };
});

increse.addEventListener("click", function(){
    if(counteur < max){
        counterValue.innerText = counteur;
        counteur ++;
    }
});




