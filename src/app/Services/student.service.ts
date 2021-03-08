import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

GetStudentData():Observable<any>{
return this.http.get('https://jsonblob.com/api/jsonblob/69b5a087-8003-11eb-918e-536792318101');
}

GetWeatherData():Observable<any>{
  return this.http.get(" http://api.openweathermap.org/data/2.5/weather?q=Galway&APPID=cc41b93c7a83f61121ed3f46dfa4f2d2");
   

}

}





  

