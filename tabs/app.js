/*  ==================*/
/*  PAGE  ANNIVERSAIRE */
/*  =================  */


const form=document.querySelector('#menu-left')
const icon = document.querySelector('.mdi-menu');
const links = document.querySelector('#menu-links');
const noms=document.querySelectorAll('.choix')
const dev=document.querySelector('#nom')
const exp=document.querySelector('.des')
const dates=document.querySelector('#dates')
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

// fetch('./Liste.json', {
//     method: 'GET'
// })
// .then(response => response.json())
// .then(data => console.log(data[0].nom))
// .catch(err => console.log(err))

//My JS
//PAGE TABS
noms.forEach(nom => {
nom.addEventListener('click',(e)=>{
    e.preventDefault();
    

    fetch('./Liste.json',{
        method:'GET'
    }).then((reponse)=>{
        if (reponse.status===200){
            return reponse.json();
        }
    })
    .then(donnees=>{
        donnees.forEach((val,index)=>{
            let nomUser = nom.childNodes[0].textContent;
            //console.log(`FROM OBJECT : ${donnees[index].nom}  FROM DOM : ${nomUser}`);
            if(donnees[index].nom===nomUser){
                dev.textContent=donnees[index].nom;
                exp.textContent=donnees[index].description;
                dates.textContent=donnees[index].date;
            }
           
        })
    })
})
});



