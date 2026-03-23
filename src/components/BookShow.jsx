import React, { useState } from "react";
import "bulma/css/bulma.min.css";
import { updateBookList,deleteBookFromList } from "../redux/bookSlice";
import { useDispatch } from "react-redux";

export default function BookShow({ bookName, index }) {
    const [updatedBookName, setUpdatedBookName] = useState(bookName)
    const dispatch = useDispatch()
    const [isInputOpen, setIsInputOpen] = useState(false)
    function handleEdit() {
        setIsInputOpen(true)
    }
    function handleSave() {
        setIsInputOpen(false)
        dispatch(updateBookList({ index, updatedBookName: updatedBookName }))
    }
    function handleDelete() {
        dispatch(deleteBookFromList(index))
    }
    function handleNameChange(event) {
        setUpdatedBookName(event.target.value)
    }

    return (
        <div class="card">
            <header class="card-header">
                <p class="card-header-title">My Book {index+1}</p>
            </header>
            <div class="card-content">
                {isInputOpen ? (
                    <div class="content">
                        <input class="input" type="text" placeholder="Find a repository" value={updatedBookName} onChange={handleNameChange} />
                    </div>
                ) : (
                    <div class="content">
                        {bookName}
                    </div>
                )
                }
            </div>
            <footer class="card-footer">
                {isInputOpen && <a href="#" class="card-footer-item" onClick={handleSave} >Save</a>}
                <a href="#" class="card-footer-item" onClick={handleEdit} >Edit</a>
                <a href="#" class="card-footer-item" onClick={handleDelete} >Delete</a>
            </footer>
        </div>
    )
}