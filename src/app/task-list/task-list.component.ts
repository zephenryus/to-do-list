import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
    @Input() tasks;
    @Output() taskCompleteToggled = new EventEmitter<number>();
    @Output() taskRemoved = new EventEmitter<number>();

    constructor () {
    }

    ngOnInit () {
    }

    toggleCompleteTask (index: number) {
        this.taskCompleteToggled.emit(index);
    }

    removeTask (index: number) {
        this.taskRemoved.emit(index);
    }
}
