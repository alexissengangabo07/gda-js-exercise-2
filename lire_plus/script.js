/*  ================ */
/*  PAGE FORMULAIRE */
/*  =============== */

const icon = document.querySelector('.mdi-menu');
const links = document.querySelector('#menu-links');

const afficherMenu = () => {
    if (links.style.display == 'none' || links.style.display == '') {
        links.style.display = 'flex';
    } else {
        links.style.display = 'none';
    }
}

icon.addEventListener('click', () => {
    afficherMenu()
});

/*=============*/

const iconsPlus = document.querySelectorAll('.content__right-icon');
const texts = document.querySelectorAll('.text');

iconsPlus.forEach((iconPlus,index) => {// event click to plus element 
    iconPlus.addEventListener('click', (e)=>{
        if(e.target.textContent === "+"){ // change text content for each context
            e.target.textContent = "-";
            texts[index].style.display = "block"; // display text content 
        }else{
            e.target.textContent = "+";
            texts[index].style.display = "none"; // display none text element content

        }
    });
});


