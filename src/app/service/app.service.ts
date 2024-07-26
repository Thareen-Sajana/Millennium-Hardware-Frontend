import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class AppService{

    constructor(private http:HttpClient){}

    public search(cusId:string,url:string):any{
        return this.http.get(url+"/"+cusId);
    }

    public add(customer:Object,url:string):any{
        return this.http.post(url,customer);
    }

    public update(cusId:string, customer:Object,url:string):any{
        return this.http.put(url+"/"+cusId,customer);
    }

    public delete(cusId:string,url:string):any{
        return this.http.delete(url+"/"+cusId);
    }
}