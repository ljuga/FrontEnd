import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { SEducacionService } from 'src/app/service/s-educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {

  nombreED: string = '';
  nombreED2: string = '';
  descripcionED: string = '';
  imgED: string = '';

  constructor(private sEducacion: SEducacionService, private router: Router) {}

  isLogged = false;

  ngOnInit(): void {
  }

  onCreate(): void {
    const proy = new Educacion(this.nombreED, this.nombreED2, this.descripcionED, this.imgED);
    this.sEducacion.save(proy).subscribe(
      data => {
        alert("educacion añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )

  }

  async newImageUpload(event: any) {
    const path = 'educacion';
    const name = this.nombreED;
    const file = event.target.files[0];
    const res = await this.sEducacion.uploadImage(file, path, name);
    this.imgED = res;

  }
}
