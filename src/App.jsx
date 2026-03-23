import React, { use, useState } from 'react'
import AddBook from './components/AddBook'
import BookList from './components/BookList'
function App() {

  const [books,setBooks]=useState([])
  function handleAdd(newBook){
    setBooks([...books,newBook])
    console.log(books);
  }
  return (
    <>
      {books && <BookList bookList={books} />}
      <AddBook 
        handleBookAdd = {handleAdd}
      />
    </>
  )
}

export default App
