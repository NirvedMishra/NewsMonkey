import PropTypes from 'prop-types'
import React, { Component } from 'react'

const Newsitem = (props)=> {
  

 
    
    return (
      <div><div className="card my-3" style={{width: "18rem"}}>
      <img src={!props.ImageUrl?"https://www.financialexpress.com/wp-content/uploads/2023/07/met.jpg": props.ImageUrl} className="card-img-top" alt="..."/>
      <div className="card-body" >
        <h5 className="card-title" style={{maxWidth: '100%',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis'}}>{props.title}...</h5>
        <p className="card-text" style={{maxWidth: '100%',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis'}}>{props.description}...</p>
    <p className="card-text"><small className="text-body-secondary">By {props.author} {new Date(props.date).toUTCString()}</small></p>
        <a href={props.newsUrl} target='_blank' className="btn btn-primary btn-sm">Read More</a>
      </div>
      
    </div></div>
    )
  
}

export default Newsitem