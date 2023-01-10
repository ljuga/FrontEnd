import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';



@Component({
  selector: 'app-new-habilidad',
  templateUrl: './new-habilidad.component.html',
  styleUrls: ['./new-habilidad.component.css']
})
export class NewHabilidadComponent implements OnInit {

  nombreS: string;
  porcentaje: number;
  color:string;

  constructor(private skillS: SkillService, private router: Router) { }

  ngOnInit(): void {
  }


  onCreate(): void {
    const skill = new Skill(this.nombreS, this.porcentaje, this.color);
    this.skillS.save(skill).subscribe(
      date => {
        alert("Skill añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Fallo");
        this.router.navigate(['']);
      }
    )

  }

}
