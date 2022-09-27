import React from 'react'

export default function Input({ items, setItems, filtered, setFiltered }) {

  const [input, setInput] = React.useState('')
  const [newItemId, setNewItemId] = React.useState(1)

  const addTask = (e) => {
    e.preventDefault()
    if(input.trim()) {
      const newItem = {
        id: newItemId,
        text: input,
        isDone: false
      }
      setNewItemId(newItemId + 1)
      setItems([...items, newItem])
      setInput('')
    }
  }

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSwitch = (e) => {
    if(e.target.value === "All") {
      setFiltered(items)
    } else if (e.target.value === "Active") {
      setFiltered(items.filter((item) => item.isDone === false))
    } else if (e.target.value === "Done") {
      setFiltered(items.filter((item) => item.isDone === true))
    }
  }

    return (
    <section className='input__section flex justify-center py-2 mt-[50px] mb-[70px]'>
      <form onSubmit={addTask} style={{display:"flex", justifyContent:"center"}}>
        <input
          value={input}
          onChange={handleChange}
          placeholder="Enter new task"
          className='input__input border text-center border-gray-200 h-[45px] w-[300px]'
          type={"text"}>
        </input>
        <button type='submit' className='w-8 cursor-pointer border bg-white flex justify-center items-center border-r-gray-200'>
        <svg width={20} xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 511.99">
          <path fill="#4459a4" fillRule="nonzero" d="M256 0c70.68 0 134.68 28.67 181.01 74.99 46.32 46.32 74.99 110.32 74.99 181S483.33 390.68 437.01 437c-46.33 46.33-110.33 74.99-181.01 74.99-70.68 0-134.68-28.66-181.01-74.99C28.67 390.68 0 326.67 0 255.99c0-70.68 28.67-134.68 74.99-181C121.32 28.67 185.32 0 256 0z"/>
          <path fill="#fff" d="M234.68 130.59h42.64c10.11 0 18.38 8.29 18.38 18.39v67.32h67.32c10.11 0 18.38 8.33 18.38 18.38v42.63c0 10.09-8.3 18.38-18.38 18.38H295.7v67.32c0 10.1-8.28 18.39-18.38 18.39h-42.64c-10.1 0-18.38-8.27-18.38-18.39v-67.32h-67.32c-10.08 0-18.38-8.26-18.38-18.38v-42.63c0-10.12 8.27-18.38 18.38-18.38h67.32v-67.32c0-10.12 8.27-18.39 18.38-18.39z"/>
        </svg>
        </button>
      </form>
      
      <select onChange={handleSwitch} className='ml-10 text-center' type={"select"}>
        <option>All</option>
        <option>Active</option>
        <option>Done</option>
      </select>
    </section>
  )
}
