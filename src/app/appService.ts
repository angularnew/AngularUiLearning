import { Customer } from 'src/models/customer';
import { Injectable } from '@angular/core';
@Injectable({
        providedIn: 'root',
      })
export class AppService {
        customers:Customer[];
        constructor(){
                this.customers=[];
        }
        addCustomer(customer:Customer){
                this.customers.push(customer);
        }
        getCustomersList(){
                return this.customers;
        }
}