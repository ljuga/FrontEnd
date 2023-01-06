import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-edit-habilidad',
  templateUrl: './edit-habilidad.component.html',
  styleUrls: ['./edit-habilidad.component.css']
})
export class EditHabilidadComponent implements OnInit {

  skill: Skill = null;

  constructor(private skilS: SkillService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skilS.detail(id).subscribe(
      data =>{
        this.skill = data;
      },err =>{
        alert("error al modificar experiencia");
        this.router.navigate(['']);
      }
    )

  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skilS.update(id, this.skill).subscribe(
      data => {
        this.router.navigate(['']);

      }, err => {
        alert("error al modificar experiencia");
        this.router.navigate(['']);
      }
    )

  }

}
