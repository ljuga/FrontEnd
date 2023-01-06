export class Skill {

    id?: number;
    nombre: string;
    porcentaje: number;
    color: number;


    constructor(nombre: string, porcentaje: number, color: number) {
        this.nombre = nombre;
        this.porcentaje = porcentaje;
        this.color = color;
    }
}
