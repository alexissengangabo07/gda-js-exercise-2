/*  ============= */
/*  PAGE  CHRONO*/
/*  ===========  */

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

//My JS

// let users = [{
//         firstName: 'Alexandre',
//         lastName: 'Amani Chambo',
//         birthday: '1997-07-28',
//         image: 'img1.jpeg'
//     },
//     {
//         firstName: 'Alexis ',
//         lastName: 'Senga Ngabo',
//         birthday: '1997-06-20',
//         image: 'img2.jpeg'
//     },
//     {
//         firstName: 'Bonheur',
//         lastName: 'Bushiri',
//         birthday: '1997-01-10',
//         image: 'img3.jpeg'
//     },
//     {
//         firstName: 'Dieumerci',
//         lastName: 'Muhindo',
//         birthday: '1997-07-22',
//         image: 'img4.jpeg'
//     },
//     {
//         firstName: 'Doddy',
//         lastName: 'Matabaro',
//         birthday: '1997-04-02',
//         image: 'img5.png'
//     },
//     {
//         firstName: 'Valentin',
//         lastName: 'Nasibu Jonas',
//         birthday: '1997-09-17',
//         image: 'img6.png'
//     }
// ];

const cardBody = document.querySelector('#card-body');

fetch('./users.json', {
        method: 'get',
        headers: { 'Accept': '*/*' }
    })
    .then(data => data.json())
    .then(data => data.map(utilisateur => {
        cardBody.innerHTML += `<div class="card-item">
                            <div class="image">
                                <img src="../images/${utilisateur.image}" class="img" />
                            </div>
                            <div class="infos">
                                <div>
                                    <h4 class="name">${utilisateur.firstName}</h4>
                                </div>
                                <div class="years">
                                    <span class="text">${utilisateur.birthday}</span>
                                </div>
                            </div>
                        </div>`;
    }))
    .catch(err => console.error(err));