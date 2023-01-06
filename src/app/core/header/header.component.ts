import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  pers: Persona[] = [];

  constructor(private sPersona: PersonaService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarPersona();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarPersona(): void {
    this.sPersona.lista().subscribe(
      data => this.pers = data
    );
  }

  delete(id?: number) {
    if (id != undefined) {
      this.sPersona.delete(id).subscribe(
        data => {
          this.cargarPersona();
        }, erro => {
          alert("No se pudo borrar la Persona");
        }
      )
    }
  }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

}
