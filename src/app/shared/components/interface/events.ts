import { Injectable } from "@angular/core"
import { Subject } from "rxjs"

@Injectable({
    providedIn: 'root'
})

export class eventos {

    public events = new Subject<any>()
    public events$ = this.events.asObservable()
}