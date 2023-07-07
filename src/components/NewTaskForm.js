import React, { useState } from "react";

const initialState = {
  text: "",
  category: "Code"
}
function NewTaskForm({categories, onTaskFormSubmit}) {

  // const [details, setDetails] = useState("")
  // const [category, setCategory] = useState()

  const [toDos, setToDos] = useState(initialState)
  const {text, category} = toDos

  // function handleDetails(e) {
  //   setDetails(e.target.value)
  // }

  // function handleCategory(e) {
  //   setCategory(e.target.value)

  // }

  const handleToDos = (e) => {
    const {name, value} = e.target
    setToDos(toDos => {
      return {
        ...toDos,
        [name]: value
      }
    })
  }

  const specificCats = categories.filter((category) => category !== "All")

  const categoryOptions = specificCats.map((category) => {
    return <option key={category}>{category}</option>
  })

  function handleSubmit(e) {
    e.preventDefault()
    onTaskFormSubmit(toDos)
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={handleToDos}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={handleToDos}>
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;