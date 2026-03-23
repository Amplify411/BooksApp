import React, { use, useState } from 'react'
import AddBook from './components/AddBook'
import BookList from './components/BookList'
import { useSelector } from 'react-redux'

function App() {

  const { bookList } = useSelector((state) => state.bookAdder)

  return (
    <>
      {bookList && <BookList />}
      <AddBook />
    </>
  )
}

export default App
