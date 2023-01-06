export class Proyecto {

    id?: number;
    nombreP: string;
    nombrePT: string;
    descripcionP: string;
    nombreL: string;
    
    constructor(nombreP: string, nombrePT: string, descripcionP: string, nombreL: string) {

        this.nombreP = nombreP;
        this.nombrePT =  nombrePT;
        this.descripcionP = descripcionP;
        this.nombreL = nombreL;

    }
}
