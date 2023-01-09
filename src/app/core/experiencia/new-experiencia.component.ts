import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreE: string = '';
  nombreE2: string = '';
  descripcionE: string = '';
  imgE: string = '';

  constructor(private sExperiencia: SExperienciaService, private router: Router) {}

  isLogged = false;

  ngOnInit(): void {
  }

  onCreate(): void {
    const proy = new Experiencia(this.nombreE, this.nombreE2, this.descripcionE, this.imgE);
    this.sExperiencia.save(proy).subscribe(
      data => {
        alert("Proyecto añadido");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )

  }

  async newImageUpload(event: any) {
    const path = 'experiencia';
    const name = this.nombreE;
    const file = event.target.files[0];
    const res = await this.sExperiencia.uploadImage(file, path, name);
    this.imgE = res;

  }


}
