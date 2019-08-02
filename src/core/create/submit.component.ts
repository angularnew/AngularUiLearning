import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './submit.component.html',
})
export class SubmitComponent {
  constructor(private router:Router){

  };
  public done():void{
    this.router.navigate(['/home']);
  }
  
}
