import React from "react";
import BookShow from "./BookShow";
import { useSelector } from 'react-redux'


export default function BookList() {

    const { bookList } = useSelector((state) => state.bookAdder)

    return (
        <>
            {bookList.map((value, index) => {
                return (
                    <BookShow key={index} bookName={value} index={index} />
                )
            })}
        </>
    )
}