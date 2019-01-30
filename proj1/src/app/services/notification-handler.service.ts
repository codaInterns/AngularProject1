import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class NotificationHandler{

    @Output()
    alert = new EventEmitter<{type:string,msg:string}>();

    constructor(){}
}