import PropTypes from 'prop-types'
import React, { Component } from 'react'
import settings from '../Settings.gif'

const Loading = ()=>{
  

  
    return (
      <>
         <div className="container text-center">
            <img src={settings} alt="loading"/>
         </div>
      </>
    )
  
}

export default Loading