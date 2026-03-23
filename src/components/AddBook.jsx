import { useState } from "react";
import { addBookList } from "../redux/bookSlice";

import { useDispatch, useSelector } from 'react-redux'


export default function AddBook() {
    const dispatch = useDispatch()
    const [book, setBook] = useState("")
    const { bookList } = useSelector((state) => state.bookAdder)

    function handleSubmit(e) {
        e.preventDefault();
        let newList = [...bookList, book]
        dispatch(addBookList(newList))
    }
    function handleBookChange(e) {
        setBook(e.target.value)
    }

    return (

        <form onSubmit={handleSubmit} >
            <div class="field is-grouped">
                <p class="control is-expanded">
                    <input class="input" type="text" placeholder="Find a repository" value={book} onChange={handleBookChange} />
                </p>
                <p class="control">
                    <button class="button is-info">
                        Submit
                    </button>
                </p>
            </div>
        </form>
    )
}