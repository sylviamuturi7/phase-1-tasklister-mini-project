// Wait for the page to load completely
document.addEventListener("DOMContentLoaded", function() {
  
  // Find the form on the page
  const form = document.getElementById('create-task-form'); // the box of books
  
  // Find the list where we will add tasks
  const tasksList = document.getElementById('tasks'); // like a  pageless book of writing tasks

  // Create buildToDo function
  function buildToDo(task) {
    // Create a new list item
    const newTask = document.createElement('li'); // making a specific page for the task
    
    // Put the task text in the list item
    newTask.textContent = task; // puts users input in the li element
    
    // Add the new task to the list
    tasksList.appendChild(newTask); // putting the page created with the task in the book
  }  //appendChild: like giving a child to a parent

  // Listen for when someone submits the form
  form.addEventListener('submit', (event) => {
    
    // Stop the page from refreshing
    event.preventDefault();   // preventDefault: prevents anything from happening to the page 
    
    // Get the input element
    const taskInput = document.getElementById('new-task-description'); //Getting a paper written new-task-description
    
    // Use event to get data by name
    const taskText = taskInput.value; // temporary storage area for the user's input before creating a page for it
    
    // Check if user typed something
    if (taskText !== '') {  //if something has been typed we proceed to make a paper
      
      // Call buildToDo function and pass the task
      buildToDo(taskText); // making a paper
      
      // Clear the input box
      taskInput.value = ''; // erarses the temporary storage unit ready for a new user's input
    }
  });
});
