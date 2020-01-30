import { Component } from '@angular/core';
import{FoodClass} from './FoodClass'
import{MyServices} from './MyService'
import{Employee} from './EmployeeData'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
   private HideShow : boolean = false;
   private ThisIsEmployee:boolean=false;
   private MyData=[];
   private _Datetime=null;
   _JsonEmployee:Employee[];
   private errormsg:string;
  constructor(private _Myservice:MyServices){
    
    FoodClass:FoodClass;
    this._Myservice.getJsonData().subscribe(data=>{this._JsonEmployee=data, console.log("This is"+ this._JsonEmployee)},error=>this.errormsg=error)

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
