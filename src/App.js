import Header from "./components/Header";
import Input from "./components/Input";
import Item from './components/Item';
import React from "react";

function App() {

  const [items, setItems] = React.useState([])

  return (
    <div className="App min-h-screen text-3xl w-[900px] mx-auto bg-gradient-to-r from-indigo-500 to-pink-500">
      <Header />
      <div className="flex justify-center text-lime-500 mt-5 font-bold">Total tasks: {items.length}</div>
      <Input
      items={items}
      setItems={setItems}
      />
      <Item
      items={items}
      setItems={setItems}
      />
    </div>
    
  );
}

export default App;
