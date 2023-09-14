import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import Form from '../components/Form'
import { GlobalContext } from '../containers/globalContext'
import Room from '../components/Room'
import io from 'socket.io-client';
import { useNavigate } from 'react-router-dom'
import LeaderBoard from '../components/LeaderBoard'
const Lobby = () => {
  const user = parseJwt(localStorage.getItem('token'))
  const socket = io('http://localhost:3011');
  const [showForm, setShowForm] = useState(false);

  const { rooms, setRooms,questions,setQuestions } = useContext(GlobalContext);
  const navigate = useNavigate();

  useEffect(() => {
    const getRooms = async () => {
      try {
        const token = JSON.parse(localStorage.getItem('token'));
        const response = await axios.get('http://localhost:3011/room/get-rooms', { headers: { "Authorization": token } })
        setRooms(response.data.data);
        console.log('get rooms being called');
      } catch (error) {
        console.log(error);
      }
    }
    getRooms()
    socket.on('newRoomCreated', (newRoomData) => {
      
      setRooms((prevRooms) => {
        return [...prevRooms, newRoomData];
      })
      setShowButton('false');

    });
    socket.on('quizStarted', ({roomId,player1,player2,questions}) => {
      if (user.userId== player1 || user.userId== player2) {
        navigate('quizz-dashboard');
        localStorage.setItem('RoomId', roomId);
        setQuestions(questions);
      }
    });
    socket.on('joinedRoom', (newRoomData) => {
      setRooms((prevRooms) => {
        return prevRooms.map((room) => {
          if (room._id === newRoomData._id) {
            return newRoomData;
          } else {
            return room;
          }
        });
      });
      setShowButton('false');
    });
    return () => {
      socket.disconnect();
    };
  }, [])




  function parseJwt(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    return JSON.parse(jsonPayload);
  }




  return (
    <div className=''>
      <div className='flex justify-around p-4  '>
        {showForm && <Form setShowForm={setShowForm}  />}
        {!showForm  && 
          <button className='p-3 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline:none hover:bg-gray-900 hover:shadow:-none rounded-md  ' onClick={() => { setShowForm((state) => !state) }}>Create Room</button>
        }
      </div>

      <div className='flex justify-center gap-9 flex-wrap p-4'>
        {rooms.length > 0 && rooms.map((room) => {
          return <Room  key={room._id} name={room.name} playerCount={room.playerCount} host={room.host} players={room.players} status={room.status} _id={room._id} user={user} />
        })}
      </div>
      <LeaderBoard/>
    </div>
  )
}

export default Lobby

