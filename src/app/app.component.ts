import { Component, OnInit } from '@angular/core';
import {StudentService} from './Services/student.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'StudentApp';
  students:any = [];
  weather:any = [];
  constructor(private srevice:StudentService){

  }

  ngOnInit(){
    this.srevice.GetStudentData().subscribe((data)=>{
      this.students = data.students
      console.log(this.students);
    } );


    this.srevice.GetWeatherData().subscribe((data)=>{
      this.weather = data.weather
      console.log(this.weather)
    } );
  }

}
