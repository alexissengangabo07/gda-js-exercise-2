/*  ==================*/
/*  PAGE  ANNIVERSAIRE */
/*  =================  */

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
const cardBody = document.querySelector('#card-body');
const btnClear = document.querySelector('#btn-clear');
const d = new Date();

fetch('./users.json', {
        method: 'get',
        headers: { 'Accept': '*/*' }
    })
    .then(data => data.json())
    .then(data => data.filter(utilisateur => {
        if (`${new Date(utilisateur.birthday).getMonth()}-${new Date(utilisateur.birthday).getDate()}` == `${d.getMonth()}-${d.getDate()}`) {
           cardBody.innerHTML += content(utilisateur.image, utilisateur.firstName, utilisateur.lastName, utilisateur.birthday);
        }
    }))
    .catch(err => console.error(err));

btnClear.addEventListener('click', () => {
    document.querySelector('#card').removeChild(cardBody);
});

const content = (image, firstName, lastName, birthday) => (
    `<div class="card-item">
            <div class="image">
                <img src="../images/${image}" class="img" />
            </div>
            <div class="infos">
                <div>
                    <h4 class="name">${firstName} ${lastName}</h4>
                </div>
                <div class="years">
                    <span class="text"><i style="margin-right: 28px;">${d.getFullYear() - new Date(birthday).getFullYear()} Years </i> ${birthday}</span>
                </div>
            </div>
        </div>`
);