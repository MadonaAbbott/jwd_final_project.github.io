// THIS IS THE INDEX JAVASCRIPT PAGE 


const newTaskManager = new TaskManager(0); //this is calling the class class TAskManager in the taskManager.js

newTaskManager.load(); //will load new TaskManager(0)

newTaskManager.render(); //showing the newTaskManager output in the browser



// Select the New Task Form
const newTaskForm = document.querySelector('#newTaskForm')

//This is the button handler 
//add an event listener to the New Task form, listening to the submit event. 
newTaskForm.addEventListener('submit', (event) => {
    // Prevent default action
    event.preventDefault();

    validate();

    timeout();



    //Select the inputs
    const newTaskNameInput = document.querySelector('#newTaskNameInput');
    const newTaskDescription = document.querySelector('#newTaskDescription');
    const newTaskAssignedTo = document.querySelector('#newTaskAssignedTo');
    const newTaskDueDate = document.querySelector('#newTaskDueDate');


    //convert input values to variables
    const taskname = newTaskNameInput.value;
    const description = newTaskDescription.value;
    const assignedTo = newTaskAssignedTo.value;
    const dueDate = newTaskDueDate.value;

    //pass the variables to addtask
    newTaskManager.addTask(taskname, description, assignedTo, dueDate);

    // Save the validated tasks to localStorage
    newTaskManager.save();



    // Render the validated tasks
    newTaskManager.render();


    //return the form fields to empty after submission
    newTaskNameInput.value = '';
    newTaskDescription.value = '';
    newTaskAssignedTo.value = '';
    newTaskDueDate.value = '';

});

// This is the timer for the form field input
timeout = () => {
    setTimeout(validate, 1000);
};


// THIS IS THE VALIDATION CODE

//this function is to validate user input
function validate() {

    let data = true;

    // validate taskname user input //


    if (newTaskNameInput.value == "") {
        // alert('blank taskname')
        newTaskNameInput.style.borderColor = "solid red"
        newTaskNameInput.style.outline = "solid red"
        tasknameError.innerHTML = 'Task name cannot be blank'
        data = false
    } else if (newTaskNameInput.value != "") {
        newTaskNameInput.style.borderColor = "solid red"
    }
    if (newTaskNameInput.value.length < 1) {
        newTaskNameInput.style.borderColor = "solid red"
        newTaskNameInput.style.outline = "solid red"
        tasknameError.innerHTML = 'Task name cannot be blank'
        data = false
    } else if (newTaskNameInput.value.length >= 1) {
        newTaskNameInput.style.borderColor = "solid green"
        newTaskNameInput.style.outline = "solid green"
        tasknameError.innerHTML = ''
        data = true
    }

    // validate description user input //

    if (newTaskDescription.value == "") {
        // alert('blank description')
        newTaskDescription.style.borderColor = "solid red"
        newTaskDescription.style.outline = "solid red"
        descriptionError.innerHTML = 'Description cannot be blank'
        data = false
    } else if (newTaskDescription.value != "") {
        newTaskDescription.style.borderColor = "solid red"
    }
    if (newTaskDescription.value.length < 1) {
        newTaskDescription.style.borderColor = "solid red"
        newTaskDescription.style.outline = "solid red"
        descriptionError.innerHTML = 'Description cannot be blank'
        data = false
    } else if (newTaskDescription.value.length >= 1) {
        newTaskDescription.style.borderColor = "solid green"
        newTaskDescription.style.outline = "solid green"
        descriptionError.innerHTML = ''
        data = true
    }

    // validate assign user input //  
    if (newTaskAssignedTo.value == "") {
        // alert('blank assign')
        newTaskAssignedTo.style.borderColor = "solid red"
        newTaskAssignedTo.style.outline = "solid red"
        assignError.innerHTML = 'Assign To cannot be blank'
        data = false
    } else if (newTaskAssignedTo.value != "") {
        newTaskAssignedTo.style.borderColor = "solid red"
    }
    if (newTaskAssignedTo.value.length < 1) {
        newTaskAssignedTo.style.borderColor = "solid red"
        newTaskAssignedTo.style.outline = "solid red"
        assignError.innerHTML = 'Assign To cannot be blank'
        data = false
    } else if (newTaskAssignedTo.value.length >= 1) {
        newTaskAssignedTo.style.borderColor = "solid green"
        newTaskAssignedTo.style.outline = "solid green"
        assignError.innerHTML = ''
        data = true
    }

    // validate due date user input //  
    if (newTaskDueDate.value == "") {
        newTaskDueDate.style.borderColor = "solid red"
        newTaskDueDate.style.outline = "solid red"
        dueDateError.innerHTML = "Please choose a due date"
        data = false

    } else if (newTaskDueDate.value != '') {
        newTaskDueDate.style.borderColor = "solid green"
        newTaskDueDate.style.outline = "solid green"
        dueDateError.innerHTML = ""
        data = true
    }

    //the alerts will not show up after submission
    if (newTaskNameInput.value == '' && newTaskDescription.value == '' && newTaskAssignedTo.value == '' && newTaskDueDate.value == '') {
        newTaskNameInput.style.borderColor = ""
        newTaskNameInput.style.outline = ""
        tasknameError.innerHTML = ''
        newTaskDescription.style.borderColor = ""
        newTaskDescription.style.outline = ""
        descriptionError.innerHTML = ''
        newTaskAssignedTo.style.borderColor = ""
        newTaskAssignedTo.style.outline = ""
        assignError.innerHTML = ''
        newTaskDueDate.style.borderColor = ""
        newTaskDueDate.style.outline = ""
        dueDateError.innerHTML = ""
        data = true
    }

    // alert(data);
    return data; // to maintain state of data to true

};

// Select the Tasks List
//this is for the individual Task Cards
// const tasksList = document.querySelector('#tasksList');

// Add an 'onclick' event listener to the Tasks List
tasksList.addEventListener('click', (event) => {
    // Check if a "Mark As Done" button was clicked
    if (event.target.classList.contains('done-button')) {
        // Get the parent Task
        const parentTask = event.target.parentElement.parentElement; //the parent element of the "Mark as Done" button

        // Get the taskId of the parent Task.
        const taskId = Number(parentTask.dataset.taskId);

        // Get the task from the TaskManager using the taskId
        const task = newTaskManager.getTaskById(taskId);

        // Update the task status to 'DONE'
        task.status = 'DONE';

        // Save the tasks to localStorage
        newTaskManager.save();

        // Render the tasks
        newTaskManager.render();
    }

    // Check if a "Delete" button was clicked
    if (event.target.classList.contains('delete-button')) {
        // Get the parent Task
        const parentTask = event.target.parentElement.parentElement; //the parent-element of the "delete" button

        // Get the taskId of the parent Task.
        const taskId = Number(parentTask.dataset.taskId);

        // Delete the task
        newTaskManager.deleteTask(taskId);

        // Save the tasks to localStorage
        newTaskManager.save();

        // Render the tasks
        newTaskManager.render();
    }

});