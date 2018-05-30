import { Component,OnInit } from '@angular/core';
import { ServiceDemo } from './Services/services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ServiceDemo]
})
export class AppComponent implements OnInit {
  title = 'app';
  public employeeObj:any={name:'',city:'',age:'',id:''}
  public empId:string; 
  public countryObj:any;
  public countryName:string;
  public countriesList:any;


constructor(private serviceDemo:ServiceDemo){

 

}

public getEmployeeDetails():void{
this.employeeObj= this.serviceDemo.getEmployee(this.empId); 
}

public getContryInfo(){
  this.serviceDemo.getCountryDetails(this.countryName).subscribe(res => this.countryObj=res.json()[0])
}

ngOnInit(){
  this.serviceDemo.getCountryName().subscribe(res => this.countriesList=res.json())
}

}
