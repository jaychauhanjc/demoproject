
import {Component} from '@angular/core';
import{UserData} from './userdata.service';
import{Department} from './department.service';

@Component({
    selector:'mycomp',
    templateUrl: './mycomp.component.html'
})
export class MyComp{
    title="Welcome"

    UserData
    Department
    constructor(ud:UserData,dp:Department){
        this.UserData = ud.getUserData();
        this.Department = dp.getDepartment();
    }    
}

