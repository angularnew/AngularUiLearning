import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CreateService } from 'src/core/create/createService';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  providers:[CreateService]
})
export class AppRoutingComponent {
  constructor(private router:Router){

  };
  
}
