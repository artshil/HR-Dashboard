import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  color1:string = "grey";
  color2:string = "black";

toggle1() {
  this.color1 = "grey";
  this.color2 = "black";
  return this.color1;
}

toggle2() {
  this.color2 = "grey";
  this.color1 = "black";
  return this.color2;
}
  constructor() { }

  ngOnInit(): void {
    if(window.location.pathname == "/employees") {
      this.color2 = "grey";
      this.color1 = "black";
    }
    else {
      this.color1 = "grey";
      this.color2 = "black";
    }
  }

}
