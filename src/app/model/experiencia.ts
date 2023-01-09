export class Experiencia {

    id?: number;
    nombreE: string;
    nombreE2: string;
    descripcionE: string;
    imgE: string;


    constructor(nombreE: string, nombreE2: string, descripcionE: string, imgE: string) {
        this.nombreE = nombreE;
        this.nombreE2 = nombreE2;
        this.descripcionE = descripcionE;
        this.imgE = imgE;
    }
}
