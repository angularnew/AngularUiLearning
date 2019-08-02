import { Customer } from 'src/models/customer';
import { Injectable } from '@angular/core';

@Injectable()
export class CreateService {
      private customer:Customer;
      public getCustomer(){
            if(this.customer==null){
                  this.customer=new Customer();
            }
            return this.customer;
      }; 
      public setCustomer(customer:Customer){
            return this.customer =customer;
      };     
}