import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import items from "../data/items";
import Item from "./Item";

function ItemForm({ onItemFormSubmit }) {
 const [inputName, setInputName] = useState("")
 const [selectCategory, setSelectCategory] =useState("Produce")

  function handleNameEntry(event) {
    setInputName(event.target.value)
  }

  function handleSelectCategory(event) {
    setSelectCategory(event.target.value)
  }

  function handleFormSubmit(e) {
    // console.log(e.target.name.value)
    // console.log(e.target.category.value)
    e.preventDefault()
    
    // const newItem = {
    //   id: uuid(),
    //   name: e.target.name.value,
    //   category: e.target.category.value,
    // }
    // console.log(newItem)
    onItemFormSubmit({
      id: uuid(),
      name: inputName,
      category: selectCategory,
    })
}


  return (
    <form className="NewItem" onSubmit={handleFormSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          onChange={handleNameEntry}
          value={inputName}
        />
      </label>

      <label>
        Category:
        <select name="category" value={selectCategory} onChange={handleSelectCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
