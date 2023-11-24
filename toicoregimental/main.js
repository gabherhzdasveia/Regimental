let lista = document.querySelectorAll(".tecla");
let contador = 0;
let audioAtual;

function tocaSom(IdElementAudio) {
    const audioElement = document.querySelector(IdElementAudio);

    if (audioAtual) {
        audioAtual.pause();
        audioAtual.currentTime = 0;
    }

    audioElement.play();
    audioAtual = audioElement;
}

while(contador < lista.length){
    const efeito = lista[contador].classList[1];
    const idAudio = "#som_"+efeito;
    lista[contador].onclick = function(){
        tocaSom(idAudio);
    }
    contador ++;
}