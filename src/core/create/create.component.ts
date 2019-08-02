import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/models/customer';
import { Router } from '@angular/router';
import { CreateService } from './createService';

@Component({
  templateUrl: './create.component.html',
})
export class CreateComponent implements OnInit {
  private customer:Customer;
  constructor(private router:Router,private createService:CreateService){

  };
  public ngOnInit(){
    this.customer=this.createService.getCustomer();
  }
  public preview():void{
    for(let prop in this.customer){
      console.log(this.customer[prop]);
    }
    this.createService.setCustomer(this.customer);
    this.router.navigate(['/create/preview']);
  }
}
