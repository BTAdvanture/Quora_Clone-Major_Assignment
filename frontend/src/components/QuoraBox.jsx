import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../feature/userSlice'
import './css/QuoraBox.css'


function QuoraBox() {
  const user = useSelector(selectUser)
  return (
    <div className='quoraBox'>
      <div className='quoraBox-info'>
        <Avatar src={user?.photo} />
      </div>
      <div className='quoraBox-quora'>
        <h5>What is your question or link?</h5>
        </div>
    </div>
  )
}

export default QuoraBox
