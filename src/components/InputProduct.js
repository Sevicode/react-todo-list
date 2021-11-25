import React, { useState } from "react";

export default function InputProduct() {
  const [items, setItems] = useState("");
  const [itemList, setItemList] = useState([]);

  // get user input
  const handleChange = (e) => {
    setItems(e.target.value);
    console.log(items);
  };

  // add to list
  const handleSubmit = (e) => {
    e.preventDefault();
    setItemList([...itemList, items]);
    setItems("");
  };

  // display list
  //   DID THIS SECTION IN THE RETURN SECTION

  // delete item
  const deleteItem = (index) => {
    const newList = [...itemList];
    newList.splice(index, 1);
    setItemList(newList);
  };

  return (
    <div>
      <div className="task-input">
        <input
          type="text"
          placeholder="Enter Product"
          value={items}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Add</button>
      </div>

      {/* display list */}

      <div className="display-section">
        <ul>
          {itemList.map((item, index) => (
            <li key={index}>
              <span>{item}</span>
              <button onClick={deleteItem}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
