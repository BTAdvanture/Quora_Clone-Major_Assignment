import React from 'react'
import './css/Header.css'
import HomeIcon from '@mui/icons-material/Home';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { ExpandMore, PeopleAltOutlined, Search } from '@mui/icons-material';
import Modal from 'react-responsive-modal';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import 'react-responsive-modal/styles.css';
import { Input, Avatar, Button } from '@material-ui/core';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { logout, selectUser } from '../feature/userSlice';
import { useDispatch, useSelector } from 'react-redux';

function Header() {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [inputUrl, setInputUrl] = useState("")
  const [question, setQuestion] = useState("");
  const Close = <CloseIcon />;
  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  const handleSubmit = async () => {
    if (question !== "") {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = {
        questionName: question,
        questionUrl: inputUrl,
        user:user,
      };
      await axios
        .post("http://localhost:8080/api/questions", body, config)
        .then((res) => {
          console.log(res.data);
          alert(res.data.message);
          window.location.href = "/";
        })
        .catch((e) => {
          console.log(e);
          alert("Error in adding question");
        });
    }
  };

const handleLogout = () => {
  if(window.confirm('Are sure to Logout ?')) {
    signOut(auth).then(() => {
      dispatch(logout())
      console.log('Logged Out')
    }).catch(() => {
      console.log('Error in logout')
    })
  }
}

  return (
    <div className='header'>
      <div className='header-content'>
        <div className='header-logo'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQipV23cEhUmfQETa6PKQCTyOAJ3jAYQwRQ9r1su2Ax&s' alt='logo'></img>
            </div>
            <div className='header-icons'>
                  <div className='header-icon'><HomeIcon /></div>
                  <div className='header-icon'><FeaturedPlayListOutlinedIcon /></div>
                  <div className='header-icon'><AssignmentTurnedInOutlinedIcon /></div>
                  <div className='header-icon'><PeopleAltOutlinedIcon /></div>
                  <div className='header-icon'><NotificationsNoneOutlinedIcon /></div>
            </div>
            <div className='header-input'>
              <Search />
              <input type="text" placeholder='Search Quora'/>
            </div>
            <div className='header-avt'>
              <span onClick={handleLogout} ><Avatar src={user?.photo} /></span>
            </div>
            <Button onClick={() => setIsModalOpen(true)}>Add Question</Button>
            <Modal 
            open={isModalOpen} 
            closeIcon={Close} 
            onClose = {() => setIsModalOpen(false)}
            closeOnEsc
            center
            closeOnOverlayClick={false}
            styles={{
              overlay: {
                height: "auto",
              }
            }}
            >
              <div className='modal-title'>
                <h5>Add Question</h5>
                <h5>Share Link</h5>
              </div>
              <div className='modal-info'>
                <Avatar src={user?.photo} className='avatar' />
                <div className='modal-scope'>
                  <PeopleAltOutlined />
                  <p>Public</p>
                  <ExpandMore />
                </div>
              </div>
              <div className='modal-Field'>
                <Input 
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                type='text' placeholder="Start your question with 'Why', 'How', 'What', etc..." />
                <div style={{
                  display:"flex",
                  flexDirection: "column"
                }}>
                  <Input type='text'
                  value={inputUrl}
                  onChange = {(e) => setInputUrl(e.target.value)}
                  style={{
                      margin: "5px 0",
                      border: "1px solid lightgray",
                      padding: "10px",
                      outline: "2px solid #000",
                    }}
                   placeholder= "Optional: inclus a link that given context" />
                   { inputUrl !== "" && (
                   <img 
                   style={{
                    height: "40vh",
                    objectFit: "contain",
                   }}
                   src={inputUrl} alt='No image' ></img>)}
                </div>
              </div>
              <div className='modal-buttons'>
                <button className='cancle' onClick={() => setIsModalOpen(false)}>
                  Cancel
                </button>
                <button onClick={handleSubmit} type='submit' className='add'>
                  Add Question
                </button>
              </div>
            </Modal>
      </div>
    </div>
  )
}

export default Header
