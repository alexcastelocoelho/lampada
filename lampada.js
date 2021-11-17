const ligar = document.getElementById ( 'turnon' );
const desliga = document.getElementById ( 'turnoff' );
const lampada = document.getElementById ( 'lamp' );

function isLampBroken () {
    return lampada.src.indexOf ( 'quebrada' ) > -1
}

function ligando () {
    if ( !isLampBroken () ) {
        lampada.src = './img/ligada.jpg'
    }
}

function desligando () {
    if ( !isLampBroken () ) {
        lampada.src = './img/desligada.jpg';
    }
}

function quebrando () {
    lampada.src = './img/quebrada.jpg';
}

ligar.addEventListener ( 'click', ligando );
desliga.addEventListener ( 'click', desligando );
lampada.addEventListener ( 'mouseover', ligando );
lampada.addEventListener ( 'mouseleave', desligando );
lampada.addEventListener ( 'dblclick', quebrando);