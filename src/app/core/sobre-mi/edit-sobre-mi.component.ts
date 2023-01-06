import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SobreMi } from 'src/app/model/sobre-mi';
import { SSobreMiService } from 'src/app/service/s-sobre-mi.service';

@Component({
  selector: 'app-edit-sobre-mi',
  templateUrl: './edit-sobre-mi.component.html',
  styleUrls: ['./edit-sobre-mi.component.css']
})
export class EditSobreMiComponent implements OnInit {

  sobremi: SobreMi = null;

  constructor(private sSobreMi: SSobreMiService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sSobreMi.detail(id).subscribe(
      data =>{
        this.sobremi = data;
      },err =>{
        alert("error al modificar SobreMi");
        this.router.navigate(['']);
      }
    )

  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sSobreMi.update(id, this.sobremi).subscribe(
      data => {
        this.router.navigate(['']);

      }, err => {
        alert("error al modificar SobreMi");
        this.router.navigate(['']);
      }
    )

  }

}
