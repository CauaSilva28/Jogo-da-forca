const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const palavras = ['CASA', 'JOGOS', 'PROFESSORA', 'ABACAXI', 'ADVOGADO'];
var palavraSecreta = palavras[Math.floor(Math.random() * 6)];
var tentativas = '';

const boneco = new Boneco(ctx);

boneco.cabeca();
boneco.tronco();
boneco.bracoDireito();
boneco.bracoEsquerdo();
boneco.pernaDireita();
boneco.pernaEsquerda();

function cabo(){
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(100,600);
    ctx.lineTo(100,200);
    ctx.lineTo(250,200);
    ctx.lineTo(250,250);
    ctx.stroke();
}

cabo();