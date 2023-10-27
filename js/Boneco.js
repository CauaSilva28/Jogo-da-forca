class Boneco{
    constructor(ctx){
        this.ctx = ctx;
    }
    
    cabeca(){
        this.ctx.lineWidth = 10;
        this.ctx.beginPath();
        this.ctx.arc(250,300,50,0,Math.PI*2);
        this.ctx.stroke();
    }
    
    tronco(){
        this.ctx.beginPath();
        this.ctx.moveTo(250,350);
        this.ctx.lineTo(250,500);
        this.ctx.stroke();
    }

    bracoDireito(){
        this.ctx.beginPath();
        this.ctx.moveTo(250,380);
        this.ctx.lineTo(320,430);
        this.ctx.stroke();
    }

    bracoEsquerdo(){
        this.ctx.beginPath();
        this.ctx.moveTo(250,380);
        this.ctx.lineTo(180,430);
        this.ctx.stroke();
    }

    pernaDireita(){
        this.ctx.beginPath();
        this.ctx.moveTo(250,500);
        this.ctx.lineTo(290,580);
        this.ctx.stroke();
    }

    pernaEsquerda(){
        this.ctx.beginPath();
        this.ctx.moveTo(250,500);
        this.ctx.lineTo(210,580);
        this.ctx.stroke();
    }
}