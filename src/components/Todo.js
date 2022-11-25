import React, { useState, useEffect } from "react";
import todo from "../images/todo.svg";

// To get the data from local storage

const getLocalItems = () => {
    let list = localStorage.getItem('lists');
    console.log(list);

    if (list) {
        return JSON.parse(localStorage.getItem('lists'))
    } else {
        return [];
    }
}

function Todo() {
    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState(getLocalItems());

    const addItem = () => {
        if (!inputData) {
        } else {
            setItems([...items, inputData]);
            setInputData("");
        }
    };

    // delete the items

    const deleteItem = (id) => {
        const updateditem = items.filter((elem, ind) => {
            return ind !== id;
        });

        setItems(updateditem);
    };

    // remove all item
    const removeAll = () => {
        setItems([]);
    };

    //   adding data to local storage
    useEffect(() => {
        localStorage.setItem('lists', JSON.stringify(items))
    }, [items]);

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src={todo} alt="list-img" />
                        <input
                            type="text"
                            placeholder="✍ Add item... "
                            value={inputData}
                            onChange={(e) => setInputData(e.target.value)}
                        />
                        <i
                            className="fa fa-plus add-btn"
                            title="Add Item"
                            onClick={addItem}
                        ></i>
                    </figure>
                    <div className="showItems">
                        {items.map((elem, ind) => {
                            return (
                                <div className="eachItem" key={ind}>
                                    <h3>{elem}</h3>
                                    <i
                                        className="far fa-trash-alt add-btn"
                                        title="Delete Item"
                                        onClick={() => deleteItem(ind)}
                                    ></i>
                                </div>
                            );
                        })}
                    </div>
                    <div className="showItems">
                        <button
                            className="btn effect04"
                            data-sm-link-text="Remove All"
                            onClick={removeAll}
                        >
                            <span>CHECK LIST</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Todo;
