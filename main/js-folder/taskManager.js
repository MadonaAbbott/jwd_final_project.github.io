//console.log("hello World");

class TaskManager {
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    }
    addTask(name, description, assignedTo, dueDate) {
        this.currentId++;
        const task = {
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: 'TODO',
            id: this.currentId
        }

        this.tasks.push(task)
    }
}
//tested this in console:
//const newTaskManager = new TaskManager;
//console.log(newTaskManager);
//Initialize a new instance of TaskManager
//Use the addTask method to add a new task
//console.log() the tasks property