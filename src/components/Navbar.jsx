import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Link
  
} from "react-router-dom";
const Navbar = ()=> {
 
  

    
    return (
      <div><nav className="navbar navbar-expand-lg  navbar-dark bg-dark" style={{position:"fixed", width:"100%", top:"0px", zIndex:"1"}}>
      <div className="container-fluid">
        <Link className="navbar-brand" style={{display:"flex", flexDirection:"row", alignItems:'center'}} to="/"><svg style={{height:"35px"}} className='mx-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 269.84 269.53"><title>&#x8D44;&#x6E90; 118</title><path d="M90.12 151c-.67-9.53 1.12-19.8 2.52-30.09.1-.68.25-1.35 1-1.63 1-.39 1.55.36 2.13.94q7.86 7.83 15.72 15.7l66.22 66.24c3.65 3.65 7.25 7.35 11 10.93 1.46 1.41 1.55 2.45.07 3.93Q163 242.71 137.3 268.47c-1.5 1.5-2.44 1.37-3.83-.16a160.59 160.59 0 0 1-29.62-47.12 173.1 173.1 0 0 1-10.42-34.57A162.05 162.05 0 0 1 90.12 151z" fill="#4cb151"/><path d="M180.17 116.78a141.93 141.93 0 0 1-2.91 31.51c-.16.76.05 1.83-1 2.08s-1.49-.6-2.06-1.18q-16.8-16.75-33.6-33.53c-10.26-10.21-20.58-20.38-30.83-30.6-9.49-9.45-18.92-19-28.42-28.42-1.31-1.31-1.23-2.28 0-3.54q21.3-21.1 42.48-42.31c3-3 6-6 8.87-9.12 2.11-2.23 3-2.26 5 .11 13.82 16.57 24.79 34.79 32 55.19a182.5 182.5 0 0 1 6.55 22.75 158.63 158.63 0 0 1 3.92 37.06zM58 193.23c-.55-.49-1.06-.89-1.53-1.36q-11.58-11.53-23.14-23.09-15.7-15.69-31.43-31.38c-2.51-2.5-2.55-2.63 0-5.17 6.6-6.66 13.14-13.37 19.77-20 5.11-5.1 10.38-10 15.47-15.17C44.14 90 51 82.8 58.05 75.75c6.22-6.22 12.57-12.32 18.87-18.46.45-.44.94-1.32 1.6-.92 1 .58 0 1.33-.22 1.93-2.21 5.39-5.16 10.42-7.24 15.87a246 246 0 0 0-9.53 31c-2.11 8.83-3.25 17.8-4.69 26.73-.55 3.44-.35 7-.66 10.45-1 11.72-.3 23.45.58 35.14.33 4.53 1.39 9 2.13 13.52.11.85.42 1.77-.89 2.22z" fill="#1a99da"/><path d="M191.49 213.55c-1.09-.32-.56-1-.21-1.65a104.13 104.13 0 0 0 6.17-13.09 218 218 0 0 0 9.79-28.81c1.73-6.94 3.29-13.9 4.55-20.94 1.22-6.89 1.57-13.87 2.27-20.81 1.33-13.09.12-26.11-1.1-39.12-.32-3.45-1.25-6.84-1.8-10.28-.14-.83-.82-2 .21-2.52s1.58.61 2.19 1.22q18 17.93 35.86 35.89c6.58 6.61 13.1 13.28 19.68 19.88 1 1 .95 1.76 0 2.71q-11.84 11.84-23.64 23.69-8.47 8.49-16.92 17c-5.46 5.47-11 10.91-16.39 16.42-6.14 6.21-12.22 12.48-18.33 18.72a5 5 0 0 1-2.33 1.69z" fill="#4cb151"/></svg>NewsMonkey</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link"to="/business">Business</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sports">Sports</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/entertainment">Entertainment</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/snt">Science & Technology</Link>
            </li>
           
            
          </ul>
         
        </div>
      </div>
    </nav></div>
    )
 
}

export default Navbar