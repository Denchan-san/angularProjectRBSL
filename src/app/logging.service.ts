import { Injectable } from "@angular/core";


//EVERYTHING IS JUST AN EXAMPLE!
//@Injectable({ providedIn : 'root'})
export class LoggingService {
    lastLog: string;

    printLog(message: string) {
        console.log(message);
        console.log(this.lastLog);
        this.lastLog = message;
    }
}