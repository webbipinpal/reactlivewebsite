import React from 'react';
import data from '../data/NewsHeadline';

const NewsItems = (props) => {
  return (
    <>
      <div className='row row-cols-1 row-cols-md-3'>
        {data.map((items, i) => {
          return (
            <div className="col mb-4" key={i}>
              <div className="card">
                <img style={{height: '250px'}} src={items.thumbnail} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{items.title}</h5>
                  <p className="card-text">{items.description}</p>
                </div>
              </div>
            </div>
            )
        })}
         
      </div>
    </>
  )
}

export default NewsItems
