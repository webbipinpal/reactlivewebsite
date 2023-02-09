import React, {useState} from 'react'
import NewsItems from './NewsItems'

const News = () => {
  const timed = new Date().toLocaleTimeString();
  const [items, setItems] = useState(timed);
 
  const increaseHandler = () => {
    setItems(timed)
  }
  setInterval(increaseHandler, 1000)
  

  return (
    <div className='container'>

        <h1>News Headline </h1>
        <h2>{timed}</h2>
        <button className='btn btn-primary' onClick={increaseHandler}>Get Time</button> <br /> <br />
        <NewsItems />

    </div>
  )
}

export default News
