import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  orderList: any;
  developerName: string;

  constructor(private httpClient:HttpClient){ 

    this.ngOnInit();
  }
  onNameKeyUp(event:any){
  }
  ngOnInit(){
    this.developerName = "Bhanu";
    this.getOrders();
  }
  getOrders(){
    this.httpClient.get(`https://api.spaceXdata.com/v3/launches?limit=8`)
    .subscribe(
      (data:any[]) => {
        if(data.length) {
          this.orderList = data;
          console.log("orderList", this.orderList)
        }
      }
    )
  }
  sortBy(event)
  {
    console.log(event);
    this.httpClient.get(`https://api.spaceXdata.com/v3/launches?limit=8&launch_year=${event}`)
    .subscribe(
      (data:any[]) => {
        if(data.length) {
          this.orderList = data;
          console.log("orderList", this.orderList)
        }
      }
    )
  }
  launchBy(event)
  {
    console.log(event);
    this.httpClient.get(`https://api.spaceXdata.com/v3/launches?limit=8&launch_success=${event}`)
    .subscribe(
      (data:any[]) => {
        if(data.length) {
          this.orderList = data;
          console.log("orderList", this.orderList)
        }
      }
    )
  }

}
