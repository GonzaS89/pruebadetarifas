const selector = document.form.opciones;

const paquet = selector[1];
const volum = selector[2];

const cuerpo = document.querySelector('body');


selector.addEventListener('click', function(){
    
    const div1 = document.createElement('div');

    let mensaje = document.createElement('h2');

    div1.appendChild(mensaje);
    cuerpo.appendChild(div1);

    if(selector.value == 'opt1' && paquet.disabled == false){
        
        paquet.disabled = true;
        volum.disabled = false;

        mensaje.textContent = 'Tibardia';   
    }   

});