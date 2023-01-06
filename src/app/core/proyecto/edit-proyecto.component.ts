import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { SProyectoService } from 'src/app/service/s-proyecto.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {

  proy: Proyecto = null;

  constructor(private sProyecto: SProyectoService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProyecto.detail(id).subscribe(
      data =>{
        this.proy = data;
      },err =>{
        alert("error al modificar Proyecto");
        this.router.navigate(['']);
      }
    )

  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProyecto.update(id, this.proy).subscribe(
      data => {
        this.router.navigate(['']);

      }, err => {
        alert("error al modificar Proyecto");
        this.router.navigate(['']);
      }
    )

  }
}
