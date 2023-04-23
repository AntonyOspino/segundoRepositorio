
const imagen1 = document.querySelector('#imagen1');
const imagen2 = document.querySelector('#imagen2');
const imagen3 = document.querySelector('#imagen3');
const starbucks = document.querySelector('.starbucks');
const fondoCirculo = document.querySelector('.circulo');
const span = document.querySelector('.span');
const ancla = document.querySelector('.ancla');
const parrafo = document.querySelector('.extend');

imagen1.addEventListener("click", function() {
    imgSlider('./imagenes/img1.png');
});

imagen2.addEventListener("click", function() {
    imgSlider('./imagenes/img2.png');
});

imagen3.addEventListener("click", function() {
    imgSlider('./imagenes/img3.png');
});

ancla.addEventListener('click', function(event){
    event.preventDefault();
    if(parrafo.className === 'extend'){
        parrafo.className = 'view';
        parrafo.style.opacity = '1';
    }else if(parrafo.className === 'view'){
        parrafo.className = 'extend';
        parrafo.style.opacity = '0';
    }
});

function imgSlider(imagenEntrante){
    // Cambiar la fuente de la imagen grande por la de la imagen entrante
    if(imagenEntrante == './imagenes/img1.png'){
        starbucks.src = imagenEntrante;
        fondoCirculo.style.backgroundColor = '#017143';
        span.style.color = '#017143';
        ancla.style.backgroundColor = '#017143';

    }else if(imagenEntrante == './imagenes/img2.png'){
        starbucks.src = imagenEntrante;
        fondoCirculo.style.backgroundColor = '#e36783';
        span.style.color = '#e36783';
        ancla.style.backgroundColor = '#e36783';

    }else{
        starbucks.src = imagenEntrante;
        fondoCirculo.style.backgroundColor = '#7b2061';
        span.style.color = '#7b2061';
        ancla.style.backgroundColor = '#7b2061';
    }
}