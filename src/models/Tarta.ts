export class Tarta{
    public nombre:string;
    public sabor:string;
    public intolerancia:string;
    public caloriasRacion:number;
    public precio:number;
    public numPorciones:number;
    constructor(nombre:string,sabor:string,intolerancia:string,caloriasRacion:number,precio:number,numPorciones:number){
        this.nombre=nombre;
        this.sabor = sabor
        this.intolerancia = intolerancia;
        this.caloriasRacion = caloriasRacion;
        this.precio=precio;
        this.numPorciones=numPorciones;

    }
}

