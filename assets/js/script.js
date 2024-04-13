// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

const addTaskBtn = $('.btn');
const modal = $('.modal');
const saveBtn = $('.save-btn');

const tStatus = {
    todo: 'to-do';
    prog: 'in-progress',
    done: 'done',
}

// Todo: create a function to generate a unique task id....done
function generateTaskId() {
    return keyGenerator(new Date());
}

// Todo: create a function to create a task card....need help with this functionz (need to use dayjs)
// Function needs to: retrieve the string of data from local storage(userTasks), parse the string into an object
saveBtn.on('click', function createTaskCard(task) {
    let cardData = {
        class: '',
        id: task.id,
        status: task.status,
    }
    let card = generateElement("div", cardData);
    const now = dayjs(new Date);
    const dueDate = dayjs(task.duedate);
    const deltaTime = dueDate.diff(now, 'day');
    const stringCard = localStorage.getItem('userTasks')
    const newCards = JSON.parse(stringCard);
    const placement = $('#todo-cards');

    for (i = 0; i < newCards.length; i++) {
        let div = $('<div>');
        let cardTitle = $('<h2>').text(newCards[i].Title);
        let cardDesc = $('<p>').text(newCards[i].Description);
        let cardDue = $('<h4>').text(newCards[i].DueDate);

        div.append(cardTitle);
        div.append(cardDesc);
        div.append(cardDue);
        placement.append(div);
    }
  
}),
// need to retrieve string, parse into object, object(formData) into an array with title, desc, due date
    saveBtn.on('click', function () {
    let stringTasks = localStorage.getItem('userTasks');
    let userTasks = JSON.parse(stringTasks) || [];

    const formData = {
        Title: $('#task-title').val(),
        Description: $('#task-description').val(),
        DueDate: $('#task-due-date').val()
    };
// push formData object into userTask array back into local storage
    userTasks.push(formData);
        localStorage.setItem('userTasks', JSON.stringify(userTasks));
        return card;
});
   

// Todo: create a function to render the task list and make cards draggable/sortable
function renderTaskList() { 
    // should get tasks from storage
    let tasks = getItem('tasks');
    if (!tasks || tasks.length == 0) {
        return;
    }
    // we need to get the card sections we want to append to card based on status
    // need to be drop/draggable
    const todo = $("#todo-cards").empty().sortable();
    const inProgress = $("#in-progess-cards").empty().sortable();
    const done = $("#done-cards").empty().sortable();

    tasks.forEah(task => {
        let card = creatTaskCard(task);
        card.draggable({
            containment: '#taskboard',
            revert: "invalid",
            snap: true,
            snapMode: "inner",
        });
        
    // switch handles which card task will attach to
    switch (task.status) {
        case tStatus.todo:
            todo.append(card);
            break;
        case tStatus.prog:
            inProgress.append(card);
            break;
        case tStatus.done:
            done.append(card);
            break;
        default:
            break;
    }
// need to make handles drop and draggable 
    }



// Todo: create a function to handle adding a new task
// get their values from user input
function handleAddTask(event){
    event.preventDefault();
    let task = {
        title: $("#task-title").val(),
        dueDate: $("#task-due-date").val(),
        description: $("task-description").val(),
        id: generateTaskId(),
        // new task will have its status set to todo by default
        status: sStatus.todo,
 }
}
// Todo: create a function to handle deleting a task
function handleDeleteTask(event){
    let taskCard = event.target.closet('.task-card');
    // delete the box when delete is clicked....onClick
    // rerender the boc using the Render Task Card
    if (!taskCard) return;
    let taskId = taskCard.id;
    document.querySelector('button').onClick = run;
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
    $('#add-task-btn').on('click', handleAddTask);
    renderTaskList();
});

