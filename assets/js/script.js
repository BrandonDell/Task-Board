// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

const timeDisplayEl = $('#time-display');
const taskDisplayEl = $('#task-display');
const taskFormEl = $('#task-form');
const titleInputEl = $('#task-title');
const descriptionInputEl = $('#task-description');
const dueDateInputEl = $('#task-due-date');

const tStatus = {
  todo: 'to-do',
  prog: 'in-progress',
  done: 'done',
};
function displayTime() {
    const rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
}
function generateTaskId() {
    return keyGenerator(new Date());
}
  
function generateTaskId() {
    let task = JSON.parse(localStorage.getItem('task'));
    if (!task) {
        task = [];
    }
    return task;
}
function saveTaskToStorage(task) {
    localStorage.setItem('task', JSON.stringify(task));
  }

// Todo: create a function to create a task card
function createTaskCard(task) {
    const taskCard = $('<div>')
    .addClass('card task-card draggable my-3')
    .attr('data-task-id', task.id);
  const cardHeader = $('<div>').addClass('card-header h4').text(task.name);
  const cardBody = $('<div>').addClass('card-body');
  const cardDescription = $('<p>').addClass('card-text').text(task.type);
  const cardDueDate = $('<p>').addClass('card-text').text(task.dueDate);
  const cardDeleteBtn = $('<button>')
    .addClass('btn btn-danger delete')
    .text('Delete')
    .attr('data-project-id', task.id);
  cardDeleteBtn.on('click', handleDeleteTask);

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    if (task.dueDate && project.status !== 'done') {
        const now = dayjs();
        const taskDueDate = dayjs(task.dueDate, 'DD/MM/YYYY');
        if (now.isSame(taskDueDate, 'day')) {
            taskCard.addClass('bg-warning text-white');
        } else if (now.isAfter(taskDueDate)) {
            taskCard.addClass('bg-danger text-white');
            cardDeleteBtn.addClass('border-light');
        }

    }

    cardBody.append(cardDescription, cardDueDate, cardDeleteBtn);
    taskCard.append(cardHeader, cardBody);
    return taskCard;
}

function printTaskData() {
    const task = readTasFromStorage();
  
    const todoList = $('#todo-cards');
    todoList.empty();
  
    const inProgressList = $('#in-progress-cards');
    inProgressList.empty();
  
    const doneList = $('#done-cards');
    doneList.empty();

    for (let taskCard of task) {
        if (task.status === 'to-do') {
            todoList.append(createTaskCard(task));
        } else if (task.status === 'in-progress') {
            inProgressList.append(createTaskCard(task));
        } else if (task.status === 'done') {
            doneList.append(createProjectCard(project));
        }
    }
}

$('.draggable').draggable({
    opacity: 0.7,
    zIndex: 100,
    helper: function (e) {
      const original = $(e.target).hasClass('ui-draggable')
        ? $(e.target)
        : $(e.target).closest('.ui-draggable');
      return original.clone().css({
        width: original.outerWidth(),
      });
    },
  });
// Todo: create a function to handle deleting a task
  function handleDeleteProject() {
    const taskId = $(this).attr('data-task-id');
    const task = readTaskFromStorage();
// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
    const task = readTaskFromStorage();
    const taskId = ui.draggable[0].dataset.taskId;
    const newStatus = event.target.id;

    for (let task of task) {
        if (task.id === taskId) {
          task.status = newStatus;
        }
      }
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    $('#taskDueDate').datepicker({
        changeMonth: true,
        changeYear: true,
    }
});
