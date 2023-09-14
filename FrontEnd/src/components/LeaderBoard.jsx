import React, { useEffect, useState } from 'react'
import axios from 'axios'
const LeaderBoard = () => {
    const [list, setList] = useState([]);
    useEffect(() => {
        const getList = async () => {
            try {
                const token = JSON.parse(localStorage.getItem('token'));
                const response = await axios.get('http://localhost:3011/room/result', { headers: { "Authorization": token } });
                setList(response.data.data);
                
            } catch (error) {
                console.log(error);
            }
        }
        getList();
    }, [])
    
    return  list.length>0 ? (    <div className=" rounded-md p-2  min-w-[300px] flex text-gray-200 flex-col items-center bg-gray-800 text-2xl">
    <div className='w-full p-2 tracking-wider text-center border-b-2 '>Result</div>
    {
        list.map((lis) => {
            return <div key={lis._id} className='border-b-2 w-full p-3'>
                <div className='flex justify-between'>
                    <span> {lis.players[0].name} </span> 
                    <span>{lis.marks[0].marks}</span>
                </div>
                <div className='flex justify-between'>
                    <span> {lis.players[1].name} </span> 
                    <span>{lis.marks[1].marks}</span>
                </div>
               
            </div>
        })
            }
</div>
    ) :null
}

export default LeaderBoard