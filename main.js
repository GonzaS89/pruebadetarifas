const selector = document.form.opciones;

const paquet = selector[1];
const volum = selector[2];

const cuerpo = document.querySelector('body');


selector.addEventListener('click', function(){
    
    if(selector.value == 'opt1' && paquet.disabled == false){

        paquet.disabled = true;
        
        let titulo = document.createElement('h1');
        titulo.textContent = '44';
        cuerpo.appendChild(titulo);
        
    }

});