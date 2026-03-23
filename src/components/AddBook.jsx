import React, { useState } from "react";

export default function AddBook({ handleBookAdd }) {
    const [book, setBook] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        handleBookAdd(book)
    }
    function handleBookChange(e) {
        setBook(e.target.value)
    }

    return (
        <>
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

        </>
    )
}