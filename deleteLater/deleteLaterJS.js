/*Step 2: The TaskManager Class
In this step, we'll create a TaskManager class that will be responsible for managing the tasks in the application.

Useful Resources for this step
ECMAScript 2015 Classes
Create a TaskManager class in js/taskManager.js
Within the constructor of the TaskManager class, initialize a this.tasks property on the class equal to an empty array.
Test Your Code!
Now is a good chance to test your code, head over to js/index.js and do the following

Initialize a new instance of TaskManager
console.log() the tasks property
Expected Result You should see an empty array logged to the browser.
*/
class TaskManager {
    constructor() {
        //needs underscore to indicate we don't directly access
        this._tasks = [];
    }
}