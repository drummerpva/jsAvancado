function Animal(){
    this.raca = "Cao";
    this.nome = "Lulu";
    this.idade = 200;
    this.peso = 10;
    
    this.fazerXixi = function(){
        console.log("Xiiiiii....");
    }
    this.comer = function(kg){
        for(i=0;i<kg;i++){
            this.mastigar(i);
        }
        console.log("Hummmm...");
        this.peso += kg;
        console.log("Novo peso",this.peso);
        
    }
    this.mastigar = function(i){
        console.log(i," Mastigando...");
    }
    
}
var lulu = new Animal();
lulu.fazerXixi();