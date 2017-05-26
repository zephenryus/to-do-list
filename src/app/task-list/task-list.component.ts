import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Lists tasks and notifies app.component of tasks completed and tasks removed.
 */
@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
    @Input() tasks;
    @Output() taskCompleteToggled = new EventEmitter<number>();
    @Output() taskRemoved = new EventEmitter<number>();

    /**
     * Emits taskCompleteToggled event with the task index
     * @param index
     */
    toggleCompleteTask (index: number) {
        this.taskCompleteToggled.emit(index);
    }

    /**
     * Emits taskRemoved event with the task index
     * @param index
     */
    removeTask (index: number) {
        this.taskRemoved.emit(index);
    }
}
