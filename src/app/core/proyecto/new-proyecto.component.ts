import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { SProyectoService } from 'src/app/service/s-proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {

  nombreP: string = '';
  nombrePT: string = '';
  descripcionP: string = '';
  nombreL: string = '';
  imgP: string = '';

  constructor(private sProyecto: SProyectoService, private router: Router) { }

  ngOnInit(): void {}

  onCreate(): void {
    const proy = new Proyecto(this.nombreP, this.nombrePT, this.descripcionP, this.nombreL, this.imgP);
    this.sProyecto.save(proy).subscribe(
      date => {
        alert("Proyecto añadido");
        this.router.navigate(['']);
      }, err => {
        alert("Fallo");
        this.router.navigate(['']);
      }
    )

  }
  async newImageUpload(event: any) {
    const path = 'proyecto';
    const name = this.nombreP;
    const file = event.target.files[0];
    const res = await this.sProyecto.uploadImage(file, path, name);
    this.imgP = res;

  }
}
