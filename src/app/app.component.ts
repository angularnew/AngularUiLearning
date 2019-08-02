import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router:Router){

  };
  public create():void{
    this.router.navigate(['/create/edit']);
  }
  public view():void{
    this.router.navigate(['/view']);
  }
  
}
