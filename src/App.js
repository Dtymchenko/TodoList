import Header from "./components/Header";
import Input from "./components/Input";
import Item from './components/Item';
import React from "react";

function App() {

  const isDefaultItems = () => {
    let defaultItems = localStorage.getItem("items")
    if (defaultItems) {
      return JSON.parse(localStorage.getItem("items"))
    } else {
      return []
    }
  }

  const [items, setItems] = React.useState(isDefaultItems())
  const [filtered, setFiltered] = React.useState([])
  const [filter, setFilter] = React.useState('')

  const getFilterFromSelect = (str) => {
    setFilter(str)
  }

  React.useEffect(() => {
    setFiltered(items)
    localStorage.setItem("items", JSON.stringify(items))
    if (filter === "Active") {
      setFiltered(items.filter((item) => item.isDone === false))
    } else if (filter === "Done") {
      setFiltered(items.filter((item) => item.isDone === true))
    }
  }, [items])

  return (
    <div className="App min-h-screen text-3xl w-[900px] mx-auto bg-gradient-to-r from-indigo-500 to-pink-500">
      <Header />
      <div className="flex justify-center text-lime-500 mt-5 font-bold">Total tasks: {items.length}</div>
      {/* <div className="flex justify-center text-lime-500 mt-5 font-bold">Filtered tasks: {filtered.length}</div> */}
      <Input
      items={items}
      setItems={setItems}
      filtered={filtered}
      setFiltered={setFiltered}
      getFilterFromSelect={getFilterFromSelect}
      isDefaultItems={isDefaultItems}
      />
      <Item
      items={items}
      setItems={setItems}
      filtered={filtered}
      setFiltered={setFiltered}
      />
    </div>
    
  );
}

export default App;
