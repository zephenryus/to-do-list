import { Component, Output, EventEmitter } from '@angular/core';

/**
 * Form for adding new tasks to the to-do list. app.component is notified by newTaskAdded event.
 */
@Component({
    selector: 'app-add-to-do',
    templateUrl: './add-to-do.component.html',
    styleUrls: ['./add-to-do.component.css']
})
export class AddToDoComponent {
    newTask: string;
    @Output() newTaskAdded = new EventEmitter<string>();

    /**
     * Emits newTaskAdded event with the new tasks name/label
     * Clears the newTask input
     */
    addTask () {
        if (this.newTask) {
            this.newTaskAdded.emit(this.newTask);
        }
        this.newTask = '';
    }
}
