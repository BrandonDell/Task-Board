$( function() {
    $( "#datepicker" ).datepicker({
      changeMonth: true,
      changeYear: true
    });

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));


// Todo: create a function to generate a unique task id
function generateTaskId() {
    task.id = generateTaskId();
}

// Todo: create a function to create a task card
// let userOject = {}
    function createTaskCard(task) {
    // need to add a button to delete a task
    // creates html for the task card
    let card = document.createElement('div');
    card.className = 'task-card';
    card.id = task.id;

    let title = document.createElement('h3');
    title.textContent = task.name;

    let description = document.createElement('p');
    description.textContent = task.description;

    //  append title and desctiption to the card....should it be appendChild?
    card.appendChild(title);
    card.appendChild(description);

    // append the card to the container
    let container = document.getElementById('container');
    container.append(card);
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    // calls creating the task card
    renderTaskList(tasks);
    // makes it draggable and droppable
    $(function) {
        $("draggable").draggable();
    }
}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
    renderTaskList()
    let task = {
        name: "Task Title",
        Description: 'Description';
 }
}
    createTaskCard(task);
// Todo: create a function to handle deleting a task
function handleDeleteTask(event){
    let taskCard = event.target.closet('.task-card');
    // delete the box when delete is clicked....onClick
    // rerender the boc using the Render Task Card
    if (!taskCard) return;
    let taskId = taskCard.id;
// remove task card from the Dom
    taskCard.remove();
    // or remove the task from the tasks array
    // tasks = task.filter(task => task.id !== taskId);

}

    // Todo: create a function to handle dropping a task into a new status lane
    // this function will dete the task
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

    // clear the modal when "Add Task" is clicked
    // add localStorage
    // call the 
    
   
      } );
});
