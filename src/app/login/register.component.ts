import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NuevoUsuario } from '../model/nuevo-usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  nombre: string = '';
  nombreUsuario: string = '';
  email: string = '';
  password: string = '';

  constructor( private authService: AuthService, private router: Router) { }
  ngOnInit(): void {

  }

  onCreate(): void {
    const newU = new NuevoUsuario(this.nombre, this.nombreUsuario,this.email, this.password);
    this.authService.nuevo(newU).subscribe(
      date => {
        alert("Usuario Creado");
        this.router.navigate(['']);
      }, err => {
        alert("Fallo");
        this.router.navigate(['']);
      }
    )

  }

}
