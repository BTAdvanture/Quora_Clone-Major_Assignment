import React from 'react'
import './css/Widget.css'
import WidgetContent from './WidgetContent'

function Widget() {
  return (
    <div className='widget'>
      <div className='widget-header'>
        <h5>Spaces to follow</h5>
      </div>
      <div className='widget-contents'>
        <WidgetContent />
      </div>
    </div>
  )
}

export default Widget
