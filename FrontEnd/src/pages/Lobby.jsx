import React, { useState,useContext,useEffect } from 'react'
import Card from '../ui/Card'
import axios from 'axios'
import Form from '../components/Form'
import { GlobalContext } from '../containers/globalContext'
import Loader from '../components/Loader'
import Room from '../components/Room'
const Lobby = () => {
  const [showForm, setShowForm] = useState(false);
  const { rooms, setRooms } = useContext(GlobalContext);
  useEffect(() => {
    const getRooms =async () => {
      try {
        const token = JSON.parse(localStorage.getItem('token'));
        const response= await axios.get('http://localhost:3011/room/get-rooms', { headers: { "Authorization": token } })
        setRooms(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    getRooms()
  }, [])
  
  console.log(rooms);
  return (
    <div className=''>
      <div className='flex justify-around p-4  '>
        {showForm && <Form setShowForm={setShowForm} />}
        {!showForm && <button className='p-3 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline:none hover:bg-gray-900 hover:shadow:-none rounded-md  ' onClick={() => { setShowForm((state) => !state) }}>Create Room</button>}
      </div>
      <div className='flex justify-center gap-9 flex-wrap p-4'>
        {rooms.length > 0 && rooms.map((room) => {
          return <Room key={room._id} name={room.name} playerCount={room.playerCount} host={room.host} players={room.players} status={room.status} _id={room._id} />
        }) }
      </div>
    </div>
  )
}

export default Lobby

