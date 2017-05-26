import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    tasks = [];

    onNewTaskAdded (newTask) {
        this.tasks.push({
            name: newTask,
            complete: false
        });
    }

    onTaskRemoved (index) {
        this.tasks.splice(index, 1);
    }

    onTaskCompleteToggled (index) {
        this.tasks[index].complete = !this.tasks[index].complete;
    }
}
