import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-persona',
  templateUrl: './edit-persona.component.html',
  styleUrls: ['./edit-persona.component.css']
})
export class EditPersonaComponent implements OnInit {

  persona: Persona = null;

  constructor(private sPersona: PersonaService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sPersona.detail(id).subscribe(
      data => {
        this.persona = data;
      }, err => {
        alert("error al modificar Persona");
        this.router.navigate(['']);
      }
    )

  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sPersona.update(id, this.persona).subscribe(
      data => {
        this.router.navigate(['']);

      }, err => {
        alert("error al modificar Persona");
        this.router.navigate(['']);
      }
    )

  }

  uploadImg($event:any){
    
  }

}
