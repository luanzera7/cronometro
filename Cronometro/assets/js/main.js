function criarSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-br', {
        hour12: false,
        timeZone: 'UTC'
    });
}


const relogio = document.querySelector('.relogio');
let segundos = 0;
let timer;


function iniciaRelogio() {
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = criarSegundos(segundos);
    }, 1000);
}

document.addEventListener('click', function(e){
   const el = e.target;
   if(el.classList.contains('encerrar')) {
       clearInterval(timer);
       relogio.innerHTML = '00:00:00';
       segundos = 0;
       relogio.classList.remove('pausado');
   }

   if(el.classList.contains('iniciar')) {
       clearInterval(timer);
       relogio.innerHTML = '00:00:00';
       iniciaRelogio();
   }

   if(el.classList.contains('pausar')) {
       clearInterval(timer);
       relogio.classList.add('pausado');
   }

});

