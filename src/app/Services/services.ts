import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Http} from '@angular/http';
@Injectable()

export class ServiceDemo{

    public getRecords=[
        {name:'Nikhil',city:'Pusad',age:'23',id:'1'},
        {name:'Sarvanand',city:'Gorakhpur',age:'25',id:'2'},
        {name:'Akhand',city:'Lucknow',age:'25',id:'3'},
        {name:'Asif',city:'Banaras',age:'25',id:'4'}
    ];

    constructor(private _Http:Http){

    }

    public getEmployee(id:string):any{

        let employee:any;
        for(let i=0;i<this.getRecords.length;i++)
        {
            if(id===this.getRecords[i].id){
                employee=this.getRecords[i];
                break;
            }
        }
        return employee;

    }

    public getContryDetails(){
        let url:string= 'https://restcountries.eu/rest/v2/name/india?fullText=true';
        return this._Http.get(url);
    }



}