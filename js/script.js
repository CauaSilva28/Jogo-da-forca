const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const palavras = ['MUSSARELO', 'NETFLIXO', 'NIVIO', 'SAMSUNGO', 'CARAPICUIBO', 'CAPIVARO', 'BORBOLETO', 'LUDMILO', 'CARAGUATATUBO', 'IPHONO'];
var erros = 0;
var acertos = 0;
var tentativas = "";
const palavraEscolhida = palavras[Math.floor(Math.random() * 10)];
var numLetras = palavraEscolhida.length;

const boneco = new Boneco(ctx);

const teclas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let letrasRepetidas = [];

function cabo(){
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(100,600);
    ctx.lineTo(100,200);
    ctx.lineTo(220,200);
    ctx.lineTo(220,250);
    ctx.stroke();
}

function linhasLetra(){
    for(var i = 0; i < numLetras; i++){
        ctx.beginPath();
        ctx.moveTo((i+4)*81, 600);
        ctx.lineTo((i+5)*80, 600);
        ctx.stroke();
    }
}

function letraEscolhida(){
    if(tentativas.includes(event.key)){
        alert("Essa letra ja foi escolhida!");
    }

    if(!tentativas.includes(event.key) && palavraEscolhida.includes((event.key).toUpperCase())){
        letrasTentadas()
        for(var i = 0; i < numLetras; i++){
            if(palavraEscolhida[i] == (event.key).toUpperCase()){
                ctx.fillStyle = "#fff";
                ctx.font = "70px Arial black";
                ctx.fillText((event.key).toUpperCase(),330 + (81*i),590);
                acertos++;
            }
        }
    }

    else{
        letrasTentadas()
        erros++;
        boneco.desenhaBoneco(erros);
    }
}

function letrasTentadas(){
    if(!tentativas.includes(event.key)){
        tentativas = tentativas + event.key;
    }
}

function teclasLetras() {

    for (let i = 0; i < teclas.length; i++) {

        if(letrasRepetidas.includes(teclas[i])){
            ctx.fillStyle = '#8a0a0a';
        }
        else{
            ctx.fillStyle = '#064713';
        }
        
        ctx.fillRect(i * 52 + 25, 700, 40, 40);
        ctx.fillStyle = '#ffffff';
        ctx.font = "20px Arial";
        ctx.fillText(teclas[i], i * 52 + 37, 728);
    }
}

document.addEventListener('keydown', function(event){

    if(event.keyCode >= 65 && event.keyCode <= 90){
        letraEscolhida();
        
        const letras = String.fromCharCode(event.keyCode).toUpperCase();

        if (!letrasRepetidas.includes(letras)) {
          letrasRepetidas.push(letras);
          teclasLetras();
        }
    }

});

cabo();
linhasLetra();
teclasLetras();