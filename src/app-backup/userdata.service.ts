import {Injectable} from '@angular/core'
@Injectable()
export class UserData{

    getUserData():string[]{
        return ['A', 'B','C'];
    }
}