import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import NoteCard from '../../components/Cards/NoteCard'
import {MdOutlinePushPin} from "react-icons/md";

const Home = () => {
  return (
    <>
      <Navbar/>
      <div>
        <NoteCard title="Meeting on 4th april" 
        date="3rd April 2024" 
        tags="#Meeting"
        isPinned={true}
        onEdit={()=>{}}
        onDelete={()=>{}}
        onPinNote={()=>{}}
        />
      </div>
    </>
  )
}

export default Home
