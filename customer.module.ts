import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomerLogin } from './customer-login.component';
import { CustomerRegistration } from './customer-registration.component';
import { RouterModule } from '@angular/router';
import { customerRoutes } from './customer.routes';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomerService } from './customer.service';

@NgModule({
    declarations:[
        CustomerLogin,
        CustomerRegistration
    ],
    imports:[
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forChild(customerRoutes)
    ],
    exports:[
        CustomerLogin,
        CustomerRegistration,
        RouterModule
    ],
    providers:[CustomerService]
})
export class CustomerModule{

}