import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-add-to-do',
    templateUrl: './add-to-do.component.html',
    styleUrls: ['./add-to-do.component.css']
})
export class AddToDoComponent implements OnInit {
    newTask: string;
    @Output() newTaskAdded = new EventEmitter<string>();

    constructor () {
    }

    ngOnInit () {
    }

    addTask () {
        if (this.newTask) {
            this.newTaskAdded.emit(this.newTask);
        }
        this.newTask = '';
    }
}
