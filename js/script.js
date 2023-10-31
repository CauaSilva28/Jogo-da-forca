const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const palavras = ['MUSSARELO', 'NETFLIXO', 'NIVIO', 'SAMSUNGO', 'CARAPICUIBO', 'CAPIVARO', 'BORBOLETO', 'LUDMILO', 'CARAGUATATUBO', 'IPHONO', 'SALSICHO', 'LASANHO', 'MARADONO', 'GELADEIRO', 'LANTEJOLO', 'TILAPIO', 'MONALISO', 'CARAMBOLO', 'PITANGO', 'CEREJO', 'MARGARIDO', 'TUBAINO', 'ANITO', 'PICANHO', 'CALABRESO', 'INSETICIDO', 'PRINCESO', 'ZEBRO', 'CENOURO', 'DONZELO', 'CNPJOTO', 'FRIGIDEIRO', 'ARARAQUARO', 'DELICIO', 'SEREIO', 'LAPISEIRO', 'CANETO', 'ALINO', 'CALOPSITO', 'MORTADELO'];
var erros = 0;
var acertos = 0;
var tentativas = "";
var palavraEscolhida = palavras[Math.floor(Math.random() * 40)];
var numLetras = palavraEscolhida.length;

var finalizou = false;

const boneco = new Boneco(ctx);

const teclas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var letrasRepetidas = [];

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
    verificaFimJogo();
}
function letrasTentadas(){
    if(!tentativas.includes(event.key)){
        tentativas = tentativas + event.key;
    }
}
function verificaFimJogo(){
    if(erros >= 6){
        finalizou = true;  
        ctx.fillStyle = '#ab0000';
        ctx.font = "40px Arial Black";
        ctx.fillText("Perdeu Coração! A gíria era: " + palavraEscolhida, 400, 200); 
  }
    if(acertos == numLetras){
        finalizou = true;
        ctx.fillStyle = '#007326';
        ctx.font = "40px Arial Black";
        ctx.fillText("Boa Vidoco, você venceu!", 600, 200);
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

function dicas(){
    if(palavraEscolhida == 'MUSSARELO' || palavraEscolhida == 'SALSICHO' || palavraEscolhida == 'LASANHO' || palavraEscolhida == 'PITANGO' || palavraEscolhida == 'PICANHO' || palavraEscolhida == 'CARAMBOLO' || palavraEscolhida == 'CEREJO' || palavraEscolhida == 'CALABRESO' || palavraEscolhida == 'CENOURO' || palavraEscolhida == 'MORTADELO'){
        ctx.fillStyle = '#fff';
        ctx.font = '30px Arial black'
        ctx.fillText("Dica: Alimento", 50,150);
    }

    if(palavraEscolhida == 'NETFLIXO' || palavraEscolhida == 'SAMSUNGO' || palavraEscolhida == 'IPHONO' || palavraEscolhida == 'TUBAINO'){
        ctx.fillStyle = "#fff";
        ctx.font = '30px Arial black'
        ctx.fillText("Dica: Marca", 50,150);
    }

    if(palavraEscolhida == 'CARAPICUIBO' || palavraEscolhida == 'CARAGUATATUBO' || palavraEscolhida == 'ARARAQUARO'){
        ctx.fillStyle = "#fff";
        ctx.font = '30px Arial black'
        ctx.fillText("Dica: Cidade", 50,150);
    }

    if(palavraEscolhida == 'CAPIVARO' || palavraEscolhida == 'BORBOLETO' || palavraEscolhida == 'ZEBRO' || palavraEscolhida == 'TILAPIO' || palavraEscolhida == 'CALOPSITO'){
        ctx.fillStyle = "#fff";
        ctx.font = '30px Arial black'
        ctx.fillText("Dica: Animal", 50,150);
    }

    if(palavraEscolhida == 'LUDMILO' || palavraEscolhida == 'ANITO' || palavraEscolhida == 'MARADONO' || palavraEscolhida == 'MONALISO'){
        ctx.fillStyle = "#fff";
        ctx.font = '30px Arial black'
        ctx.fillText("Dica: Celebridade", 50,150);
    }

    if(palavraEscolhida == 'GELADEIRO' || palavraEscolhida == 'LANTEJOLO' || palavraEscolhida == 'FRIGIDEIRO' || palavraEscolhida == 'INSETICIDO'){
        ctx.fillStyle = "#fff";
        ctx.font = '30px Arial black'
        ctx.fillText("Dica: Objetos", 50,150);
    }

    if(palavraEscolhida == 'PRINCESO' || palavraEscolhida == 'DONZELO' || palavraEscolhida == 'CNPJOTO' || palavraEscolhida == 'DELICIO' || palavraEscolhida == 'SEREIO' || palavraEscolhida == 'MARGARIDO'){
        ctx.fillStyle = "#fff";
        ctx.font = '30px Arial black'
        ctx.fillText("Dica: Diversos", 50,150);
    }

    if(palavraEscolhida == 'NIVIO' || palavraEscolhida == 'ALINO' || palavraEscolhida == 'LAPISEIRO' || palavraEscolhida == 'CANETO'){
        ctx.fillStyle = "#fff";
        ctx.font = '30px Arial black'
        ctx.fillText("Dica: Escola", 50,150);
    }


}

function Gerar(){
    window.location.reload();
}

document.addEventListener('keydown', function(event){

    if(event.keyCode >= 65 && event.keyCode <= 90){
        if(finalizou == false){
            letraEscolhida();
            
            const letras = String.fromCharCode(event.keyCode).toUpperCase();

            if (!letrasRepetidas.includes(letras)) {
                letrasRepetidas.push(letras);
                teclasLetras();
            }
        }
    }

});

dicas();
cabo();
linhasLetra();
teclasLetras();