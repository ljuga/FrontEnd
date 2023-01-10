export class Educacion {
    id?: number;
    nombreED: string;
    nombreED2: string;
    descripcionED: string;
    imgED: string;


    constructor(nombreED: string, nombreED2: string, descripcionED: string, imgED: string) {
        this.nombreED = nombreED;
        this.nombreED2 = nombreED2;
        this.descripcionED = descripcionED;
        this.imgED = imgED;
    }
}

