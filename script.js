document.addEventListener('DOMContentLoaded', function() {

    //selecting the button to 'add task'

    const addButton = document.getElementById ('add-task-btn');
    
    //selecting the input field where users enter tasks 

    const taskInput =document.getElementById ('task-input');

    // selecting the unordered list 

    const taskList = document.getElementById ('task-list');

    //adding a function to add a new task

    function addTask () {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            //let the user know that the input is empty 

            alert ('Please enter a task.');
            return;
        }
        //create a new li element

        const li = document.createElement('li');
        li.textContent = taskText;
        li.classList.add ('task-item'); //add class to li element

        //creating a new button for removing the task

        const removeBtn = document.createElement ('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        //assigning an onclick event to the remove button to remove the task

        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };
        //appending the remove button to the li element
        li.appendChild(removeBtn);

        // appending the li element to the task list 

        taskList.appendChild (li);

        //clear the input field
        taskInput.value = '';
    }

    // attaching an event listener to the add button

    addButton.addEventListener('click', addTask);

    //adding an event listent to the task input for the keypress event 

    taskInput.addEventListener ('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask ();
        }
    });
});