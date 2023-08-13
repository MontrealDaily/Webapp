import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  request: Observable<any>;

  lastUpdated: String = "";
  temp: String = "";
  tempFeels: String = "";

  constructor(public httpClient: HttpClient) { 
    this.request = this.httpClient.get('http://api.weatherapi.com/v1/current.json?key=APIKEY&q=Montréal&aqi=no'); 
    // To be removed. I will build an API to communicate with WeatherAPI, the user will not interact direcly with the WeatherAPI
    this.request
    .subscribe(data => {
      console.log('my data: ', data);
      this.lastUpdated = data.current.last_updated.split(" ")[1]; // Remove the current day, we only need the hours
      this.temp = data.current.temp_c;
      this.tempFeels = data.current.feelslike_c;
    })
  }

}
