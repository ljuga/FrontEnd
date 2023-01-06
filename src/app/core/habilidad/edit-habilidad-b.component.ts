import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skillb } from 'src/app/model/skillb';
import { SkillbService } from 'src/app/service/skillb.service';

@Component({
  selector: 'app-edit-habilidad-b',
  templateUrl: './edit-habilidad-b.component.html',
  styleUrls: ['./edit-habilidad-b.component.css']
})
export class EditHabilidadBComponent implements OnInit {

  skillb: Skillb = null;

  constructor(private skillbS: SkillbService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillbS.detail(id).subscribe(
      data =>{
        this.skillb = data;
      },err =>{
        alert("error al modificar experiencia");
        this.router.navigate(['']);
      }
    )

  }

  onUpdateb(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillbS.update(id, this.skillb).subscribe(
      data => {
        this.router.navigate(['']);

      }, err => {
        alert("error al modificar experiencia");
        this.router.navigate(['']);
      }
    )

  }

}
