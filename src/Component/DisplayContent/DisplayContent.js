import React from 'react'
import LeftSideContent from './LeftSideContent/LeftSideContent';
import RightSideContent from './RightSideContent/RightSideContent';
import './DisplayContent.css'

export default function DisplayContent() {
  return (
    <div style={{display:'flex'}}>
      <div>
        <LeftSideContent/>
      </div>
      <div>
        <RightSideContent/>
      </div>
    </div>
  )
}
