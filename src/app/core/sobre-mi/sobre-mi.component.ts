import { Component, OnInit } from '@angular/core';
import { SobreMi } from 'src/app/model/sobre-mi';
import { SSobreMiService } from 'src/app/service/s-sobre-mi.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {

  smi: SobreMi[] = [];

  constructor(private sSobreMi: SSobreMiService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarSobreMi();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSobreMi(): void {
    this.sSobreMi.lista().subscribe(
      data => this.smi = data
    );
  }
  delete(id?: number) {
    if (id != undefined){
      this.sSobreMi.delete(id).subscribe(
        data=>{
          this.cargarSobreMi();
        },erro => {
          alert("No se pudo borrar el SobreMi");
        }
      )
    }
  }

}
