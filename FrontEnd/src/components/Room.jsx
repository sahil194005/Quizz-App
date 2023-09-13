import React, { useContext } from 'react'
import { GlobalContext } from '../containers/globalContext';
import axios from 'axios'
const Room = ({ name, playerCount, host, players, status, _id,user }) => {
    let bgColorClass = '';
    const { rooms, setRooms } = useContext(GlobalContext)
    switch (status) {
        case 'waiting':
            bgColorClass = 'bg-green-500';
            break;
        case 'in-progress':
            bgColorClass = 'bg-yellow-500';
            break;
        case 'finished':
            bgColorClass = 'bg-blue-500';
            break;
        case 'full':
            bgColorClass = 'bg-orange-500';
            break;
        default:
            bgColorClass = 'bg-gray-500';
    }
    const RoomHandler = async (e) => {
        e.preventDefault();
        try {

            const roomObj = {
                roomId: _id
            }
            const token = JSON.parse(localStorage.getItem('token'));
            const response = await axios.post('http://localhost:3011/room/join-room', roomObj, { headers: { "Authorization": token } });
            setRooms((prevRooms) => {
                const updatedRoom = response.data.data;
                return prevRooms.map((room) => {
                    if (room._id === updatedRoom._id) {
                        return updatedRoom;
                    } else {
                        return room;
                    }
                });
            });
        } catch (error) {
            console.log(error);
        }

    }

   
    
    return (
        <div className=' flex flex-col gap-3 rounded-md shadow-lg min-h-[200px] min-w-[400px] bg-gray-800 text-gray-100 p-3 px-4 text-2xl '>
            <span className=' text-center py-2 border-b uppercase'>{name}</span>
            <div className='flex justify-between p-2 bg-gray-500   rounded-md'>
                <span>Player 1 : </span>
                <span>{players[0].name}</span>
            </div>
            <div className='flex justify-between p-2 bg-gray-500 rounded-md'>
                <span>Player 2 : </span>
                {players.length > 1 &&
                    <span>{players[1].name}</span>}
                {players.length == 1 && <span>
                    ?</span>}
            </div>
            <div className={`flex justify-between p-2 ${bgColorClass} rounded-md`}>
                <span>Status :</span>
                <span>{status}..</span>

            </div>
            {user.userId !== host && players.length<2
                &&
            <button onClick={RoomHandler} className='border bg-gray-900 rounded-lg hover:bg-gray-950'>Join</button>
            }

            {user.userId === host &&players.length<2
                &&
                <button className='border bg-gray-900 rounded-lg hover:bg-gray-950'>Wait for another Player</button>}
            
            {user.userId === host &&players.length===2
                &&
            <button className='border bg-gray-900 rounded-lg hover:bg-gray-950'>Start Quizz</button>}
        </div>
    )
}

export default Room