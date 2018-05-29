import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public gridData: any[] = products;

  onButtonClick() {
    this.title = 'Kendo UI for Angular!';
  }
}

const products = [{
   "ProductID": 1,
   "ProductName": "Chai",
   "UnitPrice": 18.0000,
   "Discontinued": true
 }, {
  "ProductID": 2,
  "ProductName": "Chang",
  "UnitPrice": 19.0000,
  "Discontinued": false
}, {
  "ProductID": 3,
  "ProductName": "aaa",
  "UnitPrice": 19.0000,
  "Discontinued": false
}, {
  "ProductID": 4,
  "ProductName": "bbb",
  "UnitPrice": 19.0000,
  "Discontinued": false
}, {
  "ProductID": 5,
  "ProductName": "ccc",
  "UnitPrice": 19.0000,
  "Discontinued": false
}
];