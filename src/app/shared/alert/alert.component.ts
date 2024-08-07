import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Router } from "@angular/router";

@Component({ 
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.css']
})
export class AlertComponent { 
    @Input() message: string;
    @Output() close = new EventEmitter<void>();

    onClose() {
        this.close.emit();
    }

    // constructor(private router: Router){}

    // onClose() { 
    //     this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    //     this.router.onSameUrlNavigation = 'reload';
    //     this.router.navigate(['/auth']);
    // }
}