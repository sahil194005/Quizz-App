import React, { useRef,useContext } from 'react'
import axios from 'axios'
import { AiOutlineClose } from 'react-icons/ai'
import { GlobalContext } from '../containers/globalContext'
const Form = ({ setShowForm }) => {

  const roomName = useRef(null);
  const { setRooms } = useContext(GlobalContext);
  const formSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const roomObj = {
        name: roomName.current.value,
      }
      const token = JSON.parse(localStorage.getItem('token'));
      const response = await axios.post('http://localhost:3011/room/create-room',roomObj,{headers:{"Authorization":token}})
      roomName.current.value = "";
      setRooms(response.data.data);
    } catch (error) {
      console.log(error);
    }

    setShowForm((state) => !state);

  }
  return (
    
    <div className=" relative w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12 rounded-md border-2  ">
      <button className='absolute top-0 right-0 p-2' onClick={()=>{setShowForm((state)=>!state)}}><AiOutlineClose/></button>
      <h1 className="text-xl font-semibold text-gray-700">No Rooms Empty? <span className="font-normal text-gray-400 ">Dont worry, create your own room</span></h1>
      <form className="mt-6" onSubmit={formSubmitHandler}>
        <div className="flex justify-between gap-3">
          <span className="w-1/2">
            <label className="block text-xs font-semibold text-gray-600 uppercase">Room Name</label>
            <input type="text" name="roomname" ref={roomName} placeholder="xyz" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
          </span>
        </div>
        <button type="submit" className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
          Create Room
        </button>
      </form>
    </div>
    

  )
}

export default Form