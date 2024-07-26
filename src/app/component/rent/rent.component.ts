import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppService } from '../../service/app.service';

@Component({
  selector: 'app-rent',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  providers:[HttpClient],
  templateUrl: './rent.component.html',
  styleUrl: './rent.component.css'
})
export class RentComponent {

    constructor(private service:AppService){}

    public url:string = "http://localhost:8080/rent";

    public rent:Rent = {
      rentId:"",
        rentalDate: "",
        returnDate: "",
        dueDate: "",
        totalCost:""
    }

    public getRent(){
      this.service.search(this.rent.rentId,this.url).subscribe((data:Rent) => {
        this.rent.rentId = data.rentId;
        this.rent.rentalDate = data.rentalDate;
        this.rent.returnDate = data.returnDate;
        this.rent.dueDate = data.dueDate;
        this.rent.totalCost = data.totalCost;

      })
    }

    public addRental(){
      this.service.add(this.rent,this.url).subscribe((data:JSON) => {
        alert("Done");
      })
    }

    public updateRental(){
      this.service.update(this.rent.rentId,this.rent,this.url).subscribe((data:JSON) => {
        alert("Update Successful");
      })
    }

    public deleteCustomer(){
      this.service.delete(this.rent.rentId,this.url).subscribe((data:JSON) => {
        alert("Delete Successful");
      })
    }

}

interface Rent{
  rentId:string,
    rentalDate: string,
    returnDate: string,
    dueDate: string,
    totalCost:string
}