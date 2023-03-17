
const imagen1 = document.querySelector('#imagen1');
const imagen2 = document.querySelector('#imagen2');
const imagen3 = document.querySelector('#imagen3');

imagen1.addEventListener("click", function() {
    imgSlider('./imagenes/img1.png');
});

imagen2.addEventListener("click", function() {
    imgSlider('./imagenes/img2.png');
});

imagen3.addEventListener("click", function() {
    imgSlider('./imagenes/img3.png');
});

function imgSlider(imagenEntrante){
    // Cambiar la fuente de la imagen grande por la de la imagen entrante
    document.querySelector('.starbucks').src = imagenEntrante;
}