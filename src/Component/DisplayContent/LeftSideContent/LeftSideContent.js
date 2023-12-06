import React from 'react'
import './LeftSideContent.css'
export default function LeftSideContent() {
  return (
    <div className='leftside_main'>
      <div className='brand_header'>Brand</div>
      <div className='brand_names'>
        <label className='brandname'>
            <input type='checkbox' value='Apple'/>Apple
        </label>
        <label className='brandname'>
            <input type='checkbox' value='Samsung'/>Samsung
        </label>
        
        <label className='brandname'>
            <input type='checkbox' value='vivo'/>Vivo
        </label>
      </div>
    </div>
  )
}
