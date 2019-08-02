import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/models/customer';
import { Router } from '@angular/router';
import { CreateService } from './createService';
import { AppService } from 'src/app/appService';

@Component({
  templateUrl: './preview.component.html',
})
export class PreviewComponent implements OnInit {
  private customer:Customer;
  constructor(private router:Router,private createService:CreateService,private appService:AppService){

  };
  ngOnInit(){
    this.customer=this.createService.getCustomer();
  }
  public confirm():void{
    alert("Are you sure you want to confirm?");
    this.appService.addCustomer(this.customer);
    this.createService.setCustomer(null);
    this.router.navigate(['/create/confirm']);
  }
  public edit():void{
    this.router.navigate(['/create/edit']);
  }
  
}
