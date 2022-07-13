/*  ========== ==== */
/*  MONEY CHANGE  */

// Pointage des éléments de puis notre page HTML

const icon = document.querySelector('.mdi-menu')
const links = document.querySelector('#menu-links')
const button = document.querySelector('button')
const input = document.querySelector('.TexBackground')
const body = document.querySelector('body')

let counter =  0

// Function Pour Parcourir les couleurs

const browseGameColor = ()=> {
    counter++;

        if (counter === 1){

            body.style.backgroundColor =  'green'
            input.textContent = `La couleur du background est : Verte`
          
        }else if(counter === 2){
            
            body.style.backgroundColor = 'yellow'
            input.textContent = `La couleur du background est : Jaune`

        }else if(counter === 3){

            body.style.backgroundColor =  'orange'
            input.textContent = `La couleur du background est : Orange`

        }else if(counter ===4){

            body.style.backgroundColor =  'purple'
            input.textContent = `La couleur du background est : Purple`

        }else if(counter ===5){

            body.style.backgroundColor =  'black'
            input.style.color = 'white'
            input.textContent = `La couleur du background est : Noir`

        }else if(counter ===6){

            body.style.backgroundColor =  'aquamarine'
            input.textContent = `La couleur du background est : Aquamarine`

        }else if(counter ===7){

            body.style.backgroundColor =  'blue'
            input.textContent = `La couleur du background est : Bleu`

        }else if(counter ===8){

            body.style.backgroundColor =  'red'
            input.textContent = `La couleur du background est : Rouge`

        }else if(counter ===9){

            body.style.backgroundColor =  'azure'
            input.style.color = 'bleu'
            input.textContent = `La couleur du background est : Azure`

        }else if(counter ===10){

            body.style.backgroundColor =  'beige'
            input.style.color = 'bleu'
            input.textContent = `La couleur du background est : Beige`

        }else if(counter ===11){

            body.style.backgroundColor =  'chocolate'
            input.textContent = `La couleur du background est : Chocolate`

        }else if(counter ===12){

            body.style.backgroundColor =  'brown'
            input.textContent = `La couleur du background est : Brune`

        }else if(counter ===13){

            body.style.backgroundColor =  'gold'
            input.textContent = `La couleur du background est : Or`

        }else if(counter ===14){

            body.style.backgroundColor =  'grey'
            input.textContent = `La couleur du background est : Grise`

        }else if(counter ===15){

            body.style.backgroundColor =  'pink'
            input.textContent = `La couleur du background est : Rose`

        }
        
        
        else {
            location.reload();
        }
    }


button.addEventListener('click', () => {

        browseGameColor(this)
});



