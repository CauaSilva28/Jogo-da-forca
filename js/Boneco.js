class Boneco{
    constructor(ctx){
        this.ctx = ctx;
    }
    
    cabeca(){
        var img = new Image();
        img.src = "img/cabeca.png";
        img.onload = function(){
            ctx.drawImage(img, 140, 230, 150, 150);
        }
    }
    
    tronco(){
        this.ctx.lineWidth = 10;
        this.ctx.beginPath();
        this.ctx.moveTo(220,375);
        this.ctx.lineTo(220,500);
        this.ctx.stroke();
    }

    bracoDireito(){
        this.ctx.beginPath();
        this.ctx.moveTo(220,380);
        this.ctx.lineTo(290,430);
        this.ctx.stroke();
    }

    bracoEsquerdo(){
        this.ctx.beginPath();
        this.ctx.moveTo(220,380);
        this.ctx.lineTo(150,430);
        this.ctx.stroke();
    }

    pernaDireita(){
        this.ctx.beginPath();
        this.ctx.moveTo(220,500);
        this.ctx.lineTo(260,580);
        this.ctx.stroke();
    }

    pernaEsquerda(){
        this.ctx.beginPath();
        this.ctx.moveTo(220,500);
        this.ctx.lineTo(180,580);
        this.ctx.stroke();
    }

    desenhaBoneco(erros){
        switch(erros){
            case 1:
                this.cabeca();
                break;
            case 2:
                this.tronco();
                break;
            case 3:
                this.bracoDireito();
                break;
            case 4:
                this.bracoEsquerdo();
                break;
             case 5:
                this.pernaDireita();
                break;
            case 6:
                this.pernaEsquerda();
                break;
        }
    }
}