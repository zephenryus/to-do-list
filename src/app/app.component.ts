import { Component } from '@angular/core';

/**
 * Root App Component
 * Orchestrates passing data between addToDo and taskList components
 */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    tasks = [];

    /**
     * Pushes new task label onto tasks
     * @param newTask
     */
    onNewTaskAdded (newTask: string) {
        this.tasks.push({
            name: newTask,
            complete: false
        });
    }

    /**
     * Removes task from tasks
     * @param index
     */
    onTaskRemoved (index: number) {
        this.tasks.splice(index, 1);
    }

    /**
     * Toggles task complete status
     * @param index
     */
    onTaskCompleteToggled (index: number) {
        this.tasks[index].complete = !this.tasks[index].complete;
    }
}
