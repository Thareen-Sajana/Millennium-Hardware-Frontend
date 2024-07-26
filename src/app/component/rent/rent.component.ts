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


}

interface Rent{
  rentId:string,
    rentalDate: string,
    returnDate: string,
    dueDate: string,
    totalCost:string
}