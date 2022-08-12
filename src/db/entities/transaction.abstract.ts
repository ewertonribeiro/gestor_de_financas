export default abstract class Transaction {
    id?: string;
    valor:number;
    descricao:string;
    date:Date;

    constructor(valor:number , descricao:string,date:Date){
        this.valor = valor;
        this.descricao = descricao;
        this.date = date;
    }
}
