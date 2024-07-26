import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppService } from '../../service/app.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  providers:[HttpClient],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

  public url:string = "http://localhost:8080/customer";

  public customer:Customer = {
    cusId:"",
    name:"",
    city:"",
    contact:""
  };

  constructor(private service:AppService){}

  public searchCustomer(){
    this.service.search(this.customer.cusId,this.url).subscribe((data:Customer) =>{
      this.customer.cusId = data.cusId;
      this.customer.name = data.name;
      this.customer.city = data.city;
      this.customer.contact = data.contact;
    })
  }

  public addCustomer(){
    this.service.add(this.customer,this.url).subscribe((data:JSON) => {
      alert("Done");
    })
  }

  public updateCustomer(){
    this.service.update(this.customer.cusId,this.customer,this.url).subscribe((data:JSON) => {
      alert("Update Successful");
    })
  }

  public deleteCustomer(){
    this.service.delete(this.customer.cusId,this.url).subscribe((data:JSON) => {
      alert("Delete Successful");
    })
  }
}

interface Customer{
  cusId:string,
  name:string,
  city:string,
  contact:string
}