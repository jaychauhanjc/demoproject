import { Injectable } from '@angular/core';
@Injectable()
export class Department{
    getDepartment():string[]{
        return['D1','D2','D3'];
    }
}
