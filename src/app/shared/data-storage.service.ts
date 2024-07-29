import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

//need to add if u want to inject service into other serice (httpService -> this service)
@Injectable({providedIn:'root'}) 
export class DataStorageService {
    constructor(private http: HttpClient) {}
}