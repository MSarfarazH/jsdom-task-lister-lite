
document.addEventListener("DOMContentLoaded", () => {
  handleForm();  
});

const renderDeleteButton = () => {
  const taskLi = document.querySelector("li");
  const tasksParent = document.querySelector("ul");

  var removeTask = document.createElement('button');
  
  removeTask.addEventListener('click', function(e) {
    taskLi.remove();
    alert("Task was Removed!")
  });

  // Add the Delete Button to the li
  taskLi.appendChild(removeTask) 
}

const renderListItem = (event) => {
    
    const taskInput = event.target.querySelector("#new-task-description");
    // List item
    // create li
    const taskLi = document.createElement("li");
    const tasksParent = document.querySelector("#tasks");
    
    // set the content for that li
    taskLi.innerText = taskInput.value;
    // ✋🏻 Adds Item to the ul element
    
    tasksParent.appendChild(taskLi);

    
  };

const handleForm = () => {
  const form = document.querySelector('#create-task-form');
  
  form.addEventListener("submit", (event) => {
      console.log(event)
      event.preventDefault();
      renderListItem(event);
      renderDeleteButton();
      event.target.reset();
    });
};
// https://stackoverflow.com/questions/26233933/removing-items-from-a-to-do-list-using-javascript