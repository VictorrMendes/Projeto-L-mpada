const turnOff = document.querySelector ( '#desligar' );
const turnOn = document.querySelector ( '#ligar' );
const lamp = document.getElementById ( 'lamp' );

turnOff.addEventListener('click',desligada);
turnOn.addEventListener('click',ligada);
lamp.addEventListener ('dblclick', lampBroken);

function ligada(){
    if ( !isLampBroken () )  {
        lamp.src = './img/ligada.jpg';
    }
}
function desligada(){
    if ( !isLampBroken () )  {
        lamp.src = './img/desligada.jpg';
   }
}
function lampBroken(){
    lamp.src = './img/quebrada.jpg';
}
function isLampBroken () {
    return lamp.src.indexOf ( 'quebrada' ) > -1
}