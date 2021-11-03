// variaveis inicializadas globalmente para ser usada dentro das funçoes 
var seg = 0;
var min = 0;
var hour = 0;
var timer;
var stopWatch = document.getElementById('stopWatch');

function start(){
    // Na varivel timer foi colocado o setInterval para autualizar de 1 em 1 segundos as variaveis segundos minutos e horas
    timer = setInterval(() => {
        seg ++;
        // verificaçao se chegou no 60 segundos para acrescentar um minuto 
        if (seg == 60){
            seg = 0;
            min ++;
        }
        // verificaçao se chegou no 60 minutos para acrescentar uma hora 
        if (min == 60){
            min = 0;
            hour ++;
        } 
        // Aqui onde e feito a atulizaçao no HTML    
        stopWatch.innerHTML = number(hour) + "<div class='twoPoints'>:</div>" + number(min) + "<div class='twoPoints'>:</div>" + number(seg);
    }, 1000);
}
function stop() {
    clearInterval(timer);
}
function reset() {
    seg = 0;
    min = 0;
    hour = 0;
    stopWatch.innerHTML = number(hour) + "<div class='twoPoints'>:</div>" + number(min) + "<div class='twoPoints'>:</div>" + number(seg);
    clearInterval(timer);
}

function number(element){
    //verificaçao se o numero que é menor que 10 para receber o zero na frente como o padrao dos cronometros
    return element < 10 ? '0' + element : element;
}