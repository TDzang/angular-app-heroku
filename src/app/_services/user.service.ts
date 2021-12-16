import { Injectable } from '@angular/core';
import { User } from '../common/user';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class UserService {

constructor(private _http: HttpClient) { }

getAll() {
    return this._http.get<User[]>("/api/user");
}

GetOneUse(id:any){
    return this._http.get<User[]>("/api/user");
}
}
