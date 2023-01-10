export class Skill {

    id?: number;
    nombreS: string;
    porcentaje: number;
    color: string;


    constructor(nombreS: string, porcentaje: number, color: string) {
        this.nombreS = nombreS;
        this.porcentaje = porcentaje;
        this.color = color;
    }
}
