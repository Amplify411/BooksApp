import React from "react";
import BookShow from "./BookShow";

export default function BookList({ bookList }) {
    return (
        <>
            {bookList.map((value, index) => {
                return (
                    <BookShow key={index} bookName={value} />
                )
            })}
        </>
    )
}