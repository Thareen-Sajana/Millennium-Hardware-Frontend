import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rent',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  providers:[HttpClient],
  templateUrl: './rent.component.html',
  styleUrl: './rent.component.css'
})
export class RentComponent {

}
