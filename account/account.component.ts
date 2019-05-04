import { Component, OnInit } from '@angular/core';
import { CustomerService } from './account.service';
import { Router } from '@angular/router';

@Component({
    templateUrl:"customer.component.html"
})
export class AccountComponent implements OnInit{

    account:Account;

    constructor(accountService:AccountService,private router:Router)

    ngOnInit(){}

}