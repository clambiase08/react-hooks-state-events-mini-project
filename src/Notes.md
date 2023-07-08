# Steps for this React Lab

## Display all the tasks in our app:

1. First, I made a hierarchy tree to figure out where each component lived in the information flow, and where State and Props needed to go
2. Then I passed TASKS down statically as a prop into the Tasklist component in App, and into the TaskList component as a deconstructed {task} prop
3. Then in TaskList I set a variable where I mapped over the tasks array prop, returning a new JSX Task component with a key, text, and category of key={task.text} text={task.text} category={task.category}
4. Then I inserted that variable in curly brackets into the JSX of the return section of the TaskList component
5. Then in the Task component I passed down {category, text} as props, and inserted them into the respective JSX sections of the return 

## When the delete button is clicked, the task should be removed from the list:

1. First, I determined that state needed to live in App because each task when it was created needed to have state so that it could be deleted
2. Then, I created the state variable in App of setTasks, and passed that into TaskList as a prop instead of the static {TASKS}
3. Then I created a onDelete function in App (since that is where state lives) that takes in a deletedtask, and returns a state where the array of tasks is filtered to remove that deleted task by returning all task.text that is not equal (!==) to the deleted task's text
4. Then I passed the onDelete function down as a prop into TaskList, and then down through TaskList into Task
5. Then in Task, I created an onClick event on the delete button that passed in a handleDelete function
6. Then I wrote a handleDelete function in Task that returned the onDelete callback and passed in the text

## Display all the categories as buttons with a key prop equal to the category:

1. First, I passed down CATEGORIES statically as a prop into the CategoryFilter component
2. Then I set a variable that mapped over the categories array and for each category, returned a button with a key of key={category} a and button text of {category}

## When a category buttong is clicked, the clicked button should have a class of selected, the task list should be filtered on that category, and if the All button is clicked, all categories should be showing

1. First, I determined that state for the categories should live in App, because both the CategoryFilter and the TaskList components will need the filtered state
2. Then I created a state variable in App of setCategory, and passed that into CategoryFilter component as separate props onSelectedCategory and SelectedCategory equal to the setCategory and categories state objects
3. Then, in CategoryFilter, inside the categoryButtons variable I set before, I added a variable called className that said if a category is equal to the selectedCategory, then return "selected", otherwise return null. I then passed className into the JSX of the button element as className={className}
4. I then added a handleClick function into the button variable that returned the onSelectedCategory callback and passed in the category
5. Finally in App, I set a variable called visibleTasks that took the tasks array and filtered it, taking in a task and saying to return the array of tasks where the category="All" or the task.category equals that category. I then passed this new variable into TaskList as a prop instead of the state tasks 

## Update the category select option dropdown so that it shows all categorys except All, and a user can select a category when adding a new task

1. First, I passed down CATEGORIES statically as a prop into the NewTaskForm component
2. Then, I set a variable equal to all categories but "All" by filtering over the categories prop and for each category, returning it into an array if the category does not equal (!==) "All"
3. Then I took this made a new variable, taking this new specificCats variable and mapping over it so for each category, I returned a JSX option element with a key={category} and text of {category}
4. Then I inserted the categoryOptions variable I just made into the return JSX in the appropriate spot in the select element

## Update the form to be a controlled component, so all the form inputs are captured in state

1. First, I determined that state for the toDos needed to live on the form, and set state variables of category and text
2. Then, I made sure the state variables matched the name attributes of the JSX elements for the form inputs, and added a value= to the state variables of text and category for the respective elements
3. Then I added an onChange event to the input elements equal to a handle function for text and category
4. Then I wrote two separate handle functions for text and category that took in an event, and returned setText(e.target.value) and setCategory(e.target.value), respectively 

## When the form is submitted, add a new task to the task list with the text and category from the form

1. First I added a onSubmit function to the form = to a handleSubmit function. Then I wrote a handleSubmit function inside the NewTaskForm component that takes in an event, returns e.preventDefault(), setText(""), and setCategory("Code")
2. Then I realized I would need to create a callback function in App to add the new task to the tasklist (since that is where the state for tasks lives)
3. So in App, I created a function that takes in a newTask, and returns setTasks, passing in a new array using the spread operator with the original tasks, and the new task ([...tasks, newTask])
4. Then I passed down this function into NewTaskForm as a prop called onTaskFormSubmit, and in NewTaskForm I put the onTaskFormSubmit callback function prop in the return of handleSubmit, passing in text and category

## Abstracting the Form to make it easier to update

1. First I set a variable of initialState equal to the object of the initial states of text and category
2. Then I made a new state variable of toDos, setToDos equal to the useState(initialState) to replace the individual category and text state variables
3. Then I wrote a new handle function called handleToDos that takes in an event, and returns a variable of name and value props = e.target of that event, as well as the setToDos state, which passes in a toDos and for each, returns a new object with original toDos, plus the new toDo with a key value pair of [name] : value. This hanlde function replaces the individual handle functions for text and category
4. Then I replaced the handle functions in the onChange events with the new handleToDos function, the text and category with toDos in the onTaskFormSubmit inside the handleSubmit function, and setText and setCategory functions with setToDos inside the handleSubmit function (passing in initialState)
5. Finally I was able to comment out the text and category state variables, and their handle functions