import React from 'react';
import news from '../assets/news.jpeg'

const NewsItem = ({title, description,src, url }) => {
  console.log(title);
  return (
    <div className="card bg-dark text-light d-inline-block mb-3 mx-3 my-3 px-2 py-3" style={{maxWidth: "345px"}}>
      <img src={src?src:news} style={{height: "200px", width: "328px"}} className="card-img-top" alt="..." />
      <div className="card-body">
      <h5 className="card-title">{title ? title.slice(0, 50) : ''}</h5>
      <p className="card-text">{description ? description.slice(0, 90): "this is a custom generated information"}</p>
      <a href={url} className="btn btn-primary">Read More...</a>
    </div>
  </div>
  )
}

export default NewsItem;
