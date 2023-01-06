import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skillb } from 'src/app/model/skillb';
import { SkillbService } from 'src/app/service/skillb.service';



@Component({
  selector: 'app-new-habilidad-b',
  templateUrl: './new-habilidad-b.component.html',
  styleUrls: ['./new-habilidad-b.component.css']
})
export class NewHabilidadBComponent implements OnInit {

  nombreB: string;
  porcentajeB: number;
  colorB:number;

  constructor(private skillbS: SkillbService, private router: Router) { }

  ngOnInit(): void {
  }


  onCreate(): void {
    const skillb = new Skillb(this.nombreB, this.porcentajeB, this.colorB);
    this.skillbS.save(skillb).subscribe(
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
