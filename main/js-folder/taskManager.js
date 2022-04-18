// THIS IS THE TASK MANAGER PAGE


const createTaskHtml = (id, taskname, description, assignedTo, dueDate, status) => `

  <li class="card m-4" id="task-card" style="width: 20rem;" data-task-id=${id}>
    <div class="card-header text-center text-white bg-dark" id="card-header">
        <h5>Task ID:${id}</h5>
    </div>
    <div class="card-body text-white bg-info">
        <h4 class="card-title text-center">${taskname}</h4>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">Assigned To:<strong>${assignedTo}</strong></li>
        <li class="list-group-item">Description:<strong>${description}</strong></li>
        <li class="list-group-item">Due Date:<strong>${dueDate}</strong></li>
        <span class="badge ${status === 'TODO' ? 'badge-primary' : 'badge-success'}">${status}</span>
    </ul>
    <div class="card-link mx-auto p-4">
    <button class="btn btn-success mt-2 ml-3 done-button ${status === 'TODO' ? 'visible' : 'invisible'}">Mark As Done</button>
    <button class="btn btn-danger mt-2 ml-3 delete-button ${status === 'TODO' ? 'visible' : 'invisible'}">Delete</button>
    </div>
  </li>

`;

class TaskManager {
    constructor(currentId = 0) {
        //initialize a this.tasks property on the class equal to an empty array.
        this.tasks = [];
        //Assign the currentId to a new property on the class, this.currentId.
        this.currentId = currentId;
    }

    //Create a method on the class, addTask. This method should accept
    // all the necessary information from the form 
    //(name, description, assignedTo, dueDate, status)

    addTask(taskname, description, assignedTo, dueDate) {
        this.currentId++;

        const task = {
            id: this.currentId,
            taskname: taskname,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: 'TODO'


        }

        this.tasks.push(task); //get the validated form field inputs and pushes it to the 'task' variable
    }

    //create the delete task method//
    deleteTask(taskId) {


        const newTasks = [];

        // Loop over the tasks
        for (let i = 0; i < this.tasks.length; i++) {
            // Get the current task in the loop
            const task = this.tasks[i];

            // Check if the task id is not the task id passed in as a parameter
            if (task.id !== taskId) {
                // Push the task to the newTasks array
                newTasks.push(task);
            }
        }

        //Set this.tasks to newTasks
        this.tasks = newTasks;
    }

    getTaskById(taskId) {
        //Create a variable to store the found task
        let foundTask;

        //Loop over the tasks and find the task with the id passed as a parameter
        for (let i = 0; i < this.tasks.length; i++) {
            // Get the current task in the loop
            const task = this.tasks[i];

            //Check if its the right task by comparing the task's id to the id passed as a parameter
            if (task.id === taskId) {
                //Store the task in the foundTask variable
                foundTask = task;
            }
        }

        //Return the found task
        return foundTask;
    }

    //code to show the outcome in the browser
    render() {
        const tasksHtmlList = [];

        for (let i = 0; i < this.tasks.length; i++) {
            const task = this.tasks[i];

            const date = new Date(task.dueDate);
            const formattedDate = (date.getDate() + 1) + '/' + (date.getMonth() + 1) + '/' + date.getFullYear(); //code for getting the calendar date

            //Pass the task id as a parameter

            const taskHtml = createTaskHtml(task.id, task.taskname, task.description, task.assignedTo, formattedDate, task.status);
            //pushes the validated form field inputs in the taskHtml
            tasksHtmlList.push(taskHtml);
        }

        const tasksHtml = tasksHtmlList.join('\n');

        const tasksList = document.querySelector('#tasksList');
        tasksList.innerHTML = tasksHtml;
    }

    //Create the save method
    save() {
        //Create a JSON string of the tasks
        const tasksJson = JSON.stringify(this.tasks);

        //Store the JSON string in localStorage
        localStorage.setItem('tasks', tasksJson);

        //Convert the currentId to a string;
        const currentId = String(this.currentId);

        //Store the currentId in localStorage
        localStorage.setItem('currentId', currentId);
    }

    //Create the load method
    load() {
        //Check if any tasks are saved in localStorage
        if (localStorage.getItem('tasks')) {
            // Get the JSON string of tasks in localStorage
            const tasksJson = localStorage.getItem('tasks');

            // Convert it to an array and store it in our TaskManager
            this.tasks = JSON.parse(tasksJson);
        }

        //Check if the currentId is saved in localStorage
        if (localStorage.getItem('currentId')) {
            //Get the currentId string in localStorage
            const currentId = localStorage.getItem('currentId');

            //Convert the currentId to a number and store it in our TaskManager
            this.currentId = Number(currentId);
        }
    }
};