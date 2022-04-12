//Task 6
//Implement a JavaScript function named validFormFieldInput(data)
//Add an ID attribute to each form field and implement the code needed to retrieve the each form field value using the following method:
//Add a Bootstrap alert component inside your form to display the errors to the users.
//1. Add the logic to display or hide the error message when the form is submited.
//2. Display a meaningful error when a form filed is invalid and the user clicks the submit button.
//3. Add the logic to hide the error message when the user clicks the submit button and the form data is valid.


const newTaskForm = document.querySelector('#form')

//This is the button handler
newTaskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    validFormFieldInput();
});


const newTaskNameInput = document.querySelector('#taskName');
const newTaskDescription = document.querySelector('#taskDescription');
const newTaskAssignedTo = document.querySelector('#taskAssignedTo');
const newTaskDueDate = document.querySelector('#taskDueDate');
const newTaskStatus = document.querySelector('#taskStatus');



//1 second timer
let timeout;

function typeFinished() {
    timeout = setTimeout(validFormFieldInput, 1000); //code working! 
};
//end of timer//


function validFormFieldInput() {

    //get the values from the inputs
    const name = newTaskNameInput.value.trim();
    const description = newTaskDescription.value.trim();
    const assignedTo = newTaskAssignedTo.value.trim();
    const dueDate = newTaskDueDate.value.trim();
    const taskStatusValue = newTaskStatus.value.trim();


    if (name === "") {
        setErrorFor(taskName, 'Please insert a Task Name');


    } else {
        setSuccessFor(taskName);
    }


    if (description === '') {
        setErrorFor(taskDescription, 'Description cannot be blank');

    } else {
        setSuccessFor(taskDescription);

    }

    if (assignedTo === '') {
        setErrorFor(taskAssignedTo, 'Assign To cannot be blank');
    } else {
        setSuccessFor(taskAssignedTo);

    }

    if (dueDate === '') {
        setErrorFor(taskDueDate, 'Please choose a due date');

    } else {
        setSuccessFor(taskDueDate);

    }


    if (taskStatusValue === '') {
        setErrorFor(taskStatus, 'Please choose a status');
    } else {
        setSuccessStatusFor(taskStatus); //not working

    }

}



function setErrorFor(input, message) {
    const formGroup = input.parentElement //.form-group is the parent element
    const small = formGroup.querySelector('small');
    small.innerHTML = message;

    //add error class
    formGroup.className = 'form-group error';
}

function setSuccessFor(input) {
    const formGroup = input.parentElement;
    formGroup.className = 'form-group success';

}


// function setSuccessStatusFor(select) {
//     const formStatus = select.childElement;
//     formStatus.className = 'form-group success';
// } //not working