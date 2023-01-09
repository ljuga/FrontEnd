import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {
// loader=true
  constructor() { }

  ngOnInit(): void {
    // setTimeout(()=>{
    //   this.loader = false;
    // },2000);
  }

}
