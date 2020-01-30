import { Component ,ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import{FoodClass} from './FoodClass';
import{MyServices} from './MyService';
import{Employee} from './EmployeeData';


 export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 
 displayedColumns = ['calories', 'carbs', 'fat', 'name','protein'];
   dataSource: MatTableDataSource<FoodClass>;
   
     @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;



  name = 'Angular';
   private HideShow : boolean = false;
   private ThisIsEmployee:boolean=false;
   private MyData=[];
   private _Datetime=null;
   _JsonEmployee:Employee[];
   private errormsg:string;
  constructor(private _Myservice:MyServices){   
    FoodClass:FoodClass;
    this._Myservice.getJsonData().subscribe(data=>{this._JsonEmployee=data, console.log("This is"+ this._JsonEmployee)},error=>this.errormsg=error);
    console.log("Hello")
    console.log(this.dataSource);

  }

  foods: FoodClass[] = [
      {name: 'Yogurt', calories: 159, fat: 6, carbs: 24, protein: 4},
      {name: 'Sandwich', calories: 237, fat: 9, carbs: 37, protein: 4},
      {name: 'Eclairs', calories: 262, fat: 16, carbs: 24, protein: 6},
      {name: 'Cupcakes', calories: 305, fat: 4, carbs: 67, protein: 4},
      {name: 'Gingerbreads', calories: 356, fat: 16, carbs: 49, protein: 4},
   ];
  





  GetDataFRomComponet():void{
     this.MyData=this.foods;
     this.ThisIsEmployee=!this.ThisIsEmployee;
   }
   HideAndShowevent(){
     this.HideShow=!this.HideShow;
     this._Datetime= this._Myservice.TestService();
   }
}
