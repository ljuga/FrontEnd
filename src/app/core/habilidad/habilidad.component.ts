import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { Skillb } from 'src/app/model/skillb';
import { SkillService } from 'src/app/service/skill.service';
import { SkillbService } from 'src/app/service/skillb.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.css']
})
export class HabilidadComponent implements OnInit {
  skill: Skill[] = [];
  skillb: Skillb[];


  constructor(private skillS: SkillService, private skillbS: SkillbService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    //FrontEnd
    this.cargarSkills();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

     //BackEnd
    this.cargarSkillbs();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }


  //Skills FrontEnd
  cargarSkills(): void {
    this.skillS.lista().subscribe(
      data => this.skill = data
    );
  }

  delete(id?: number) {
    if (id != undefined) {
      this.skillS.delete(id).subscribe(
        data => {
          this.cargarSkills();
        }, erro => {
          alert("No se pudo borrar la Experiencia");
        }
      )
    }
  }

  //Skills BackEnd
  cargarSkillbs(): void {
    this.skillbS.lista().subscribe(
      data => this.skillb = data
    );
  }

  deleteb(id?: number) {
    if (id != undefined) {
      this.skillbS.delete(id).subscribe(
        data => {
          this.cargarSkillbs();
        }, erro => {
          alert("No se pudo borrar la Experiencia");
        }
      )
    }
  }

}
