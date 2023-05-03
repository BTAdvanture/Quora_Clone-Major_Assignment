import React, { useEffect, useState } from 'react'
import './css/Feed.css'
import Post from './Post'
import QuoraBox from './QuoraBox'
import axios from 'axios'

function Feed() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    axios.get("http://localhost:8080/api/questions")
    .then((res) => {
      console.log(res.data.reverse());
      setPosts(res.data);
    })
    .catch((e) => {
      console.log(e)
    })
  }, [])
  return (
    <div className='feed'>
      <QuoraBox />
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
      {/* <Post />
      <Post />
      <Post />
      <Post />
      <Post /> */}
    </div>
  )
}

export default Feed
