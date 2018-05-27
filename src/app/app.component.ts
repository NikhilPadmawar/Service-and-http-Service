import { Component } from '@angular/core';
import { ServiceDemo } from './Services/services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ServiceDemo]
})
export class AppComponent {
  title = 'app';
  public employeeObj:any;
  public empId:string; 
  public countryObj:any;

constructor(private serviceDemo:ServiceDemo){

 

}

public getEmployeeDetails():void{
this.employeeObj= this.serviceDemo.getEmployee(this.empId); 
}

public getContryInfo(){
  this.serviceDemo.getContryDetails().subscribe(res => this.countryObj=res.json()[0])
}

}
