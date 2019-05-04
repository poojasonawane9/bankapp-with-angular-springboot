import { Component, OnInit } from '@angular/core';
import { Customer, Address } from './customer';
import { CustomerService } from './customer.service';
import { Router } from '@angular/router';

@Component({
    selector:"customer-registration",
    templateUrl:"./customer-registration.component.html"
})
export class CustomerRegistration implements OnInit{
    customer:Customer;

    constructor(private customerService:CustomerService,
        private router:Router){}

    ngOnInit(){
        this.customer = new Customer();
        this.customer.address = new Address();
    }

    registerNewCustomer(){
        console.log(this.customer);
        this.customerService.registerNewCustomer(this.customer).subscribe((data)=>{
            console.log(data);
            if(data != null){
                alert("registration is successful");
                this.router.navigate(["/login"]);
            }
        })
    }
}