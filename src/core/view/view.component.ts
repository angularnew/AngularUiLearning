import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/models/customer';
import { Router } from '@angular/router';
import { AppService } from 'src/app/appService';

@Component({
  templateUrl: './viewcustomer.html',
})
export class ViewComponent implements OnInit {
  customers:Customer[];
  constructor(private router:Router,private appservice:AppService){

  };
  public ngOnInit(){
    this.customers=this.appservice.getCustomersList();
  }
  public back():void{
    this.router.navigate(['/home']);
  }
}
