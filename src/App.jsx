import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const [readTime, setReadTime] = useState(0);

  const handleBookmarks = (blog) => {
      // console.log('adding soon bm', blog);
      const newBookmarks = [...bookmarks, blog]
      setBookmarks(newBookmarks)
  };

  const handleReadTime = blog => {
      // console.log('time added soon', blog);
      const newReadTime = readTime + blog.reading_time;
      setReadTime(newReadTime);
      
  };


  return (
    <>
      <div className='max-w-screen-xl mx-auto '>
        <Header></Header>
        <div className='flex gap-8'>
          <Blogs handleBookmarks={handleBookmarks} handleReadTime={handleReadTime}></Blogs>
          <Bookmarks bookmarks={bookmarks} readTime={readTime}></Bookmarks>
        </div>
      </div>
    </>
  )
}


export default App
