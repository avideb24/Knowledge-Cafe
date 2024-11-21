import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const [readTime, setReadTime] = useState(0);

  const handleBookmarks = (blog) => {
    // console.log('adding soon bm', blog);
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
    toast.error('🦄 Wow so easy!', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  };

  const handleReadTime = blog => {
    // console.log('time added soon', blog);
    const newReadTime = readTime + blog.reading_time;
    setReadTime(newReadTime);

    // removing bookmark after read
    const remainingBookmark = bookmarks.filter(bookmark => bookmark.id !== blog.id);
    setBookmarks(remainingBookmark);
  };


  return (
    <>
      <div className='max-w-screen-xl mx-auto '>
        <Header></Header>
        <div className='flex gap-8'>
          <Blogs handleBookmarks={handleBookmarks} handleReadTime={handleReadTime}></Blogs>
          <ToastContainer />
          <Bookmarks bookmarks={bookmarks} readTime={readTime}></Bookmarks>
        </div>
      </div>
    </>
  )
}


export default App
