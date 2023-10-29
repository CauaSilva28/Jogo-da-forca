const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const palavras = ['MUSSARELO', 'NETFLIXO', 'NIVIO', 'SAMSUNGO', 'CARAPICUIBO', 'CAPIVARO', 'BORBOLETO', 'LUDMILO', 'CARAGUATATUBO', 'IPHONO'];
var erros = 0;
var acertos = 0;
var tentativas = "";
const palavraEscolhida = palavras[Math.floor(Math.random() * 10)];
var numLetras = palavraEscolhida.length;

const boneco = new Boneco(ctx);

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
        letrasRepetidas();
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
        letrasRepetidas();
        erros++;
        boneco.desenhaBoneco(erros);
    }
}

function letrasRepetidas(){
    if(!tentativas.includes(event.key)){
        tentativas = tentativas + event.key;
        ctx.fillStyle = "#000";
        ctx.font = "32px Arial";
        ctx.fillText("Letras já escolhidas: " + tentativas.toUpperCase(),30,750);
    }
}

cabo();
linhasLetra();

document.addEventListener('keydown', function(event){
    if(event.keyCode >= 65 && event.keyCode <= 90){
        letraEscolhida();
    }
});