import { Add } from '@mui/icons-material';
import React from 'react'
import './css/SidebarOptions.css'

function SidebarOptions() {
  return (
    <div className='sidebarOptions'>
        <div className='sidebarOption'>
        <img
          src="https://media.istockphoto.com/id/1092170968/vector/open-book-with-history-doodles-and-lettering.jpg?s=612x612&w=0&k=20&c=SvXn0O25eHC8ARjwlcn83kahxjMGl2ti_DDFGozBKqg="
          alt="No image"
        />
        <p>History</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_Business_Analysis_And_Why_Every_Company_Needs_A_Business_Analyst.jpg"
          alt="No image"
        />

        <p>Business</p>
      </div>
      <div className="sidebarOption">
        <img
          src="https://researchmethod.net/wp-content/uploads/2022/09/What_is_Psychology-1024x576.jpg"
          alt="No image"
        />
        <p>Psychology</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxIo7DlQPmdS-mR1kaMU1wMHFwNIINq0NL9Q&usqp=CAU"
          alt="No image"
        />
        <p>Cooking</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://guardian.ng/wp-content/uploads/2020/10/Music-art.-Photo-Pinterest-870x598.jpg"
          alt="No image"
        />
        <p>Music</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://img.freepik.com/free-vector/colorful-science-education-background_23-2148490697.jpg?w=2000"
          alt="No image"
        />
        <p>Science</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://images.moneycontrol.com/static-mcnews/2022/09/Health-insurance-3.png?impolicy=website&width=1600&height=900"
          alt="No image"
        />
        <p>Health</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/b/b4/At-the-movies.jpg"
          alt="No image"
        />
        <p>Movies</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://images.cnbctv18.com/wp-content/uploads/2021/10/cloud-technology.jpg"
          alt="No image"
        />
        <p>Technology</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2015/12/01/Pictures/_c34102da-9849-11e5-b4f4-1b7a09ed2cea.jpg"
          alt="No image"
        />
        <p>Education</p>
      </div>
      <div className="sidebarOption">
        <Add />
        <p className="text">Discover Spaces</p>
      </div>
    </div>
  );
}

export default SidebarOptions
