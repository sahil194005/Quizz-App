import React, { useEffect, useState } from 'react'
import axios from 'axios'
const LeaderBoard = () => {
    const [list, setList] = useState([]);
    useEffect(() => {
        const getList = async () => {
            try {
                const token = JSON.parse(localStorage.getItem('token'));
                const response = await axios.get('http://localhost:3011/room/result', { headers: { "Authorization": token } });
                console.log(response.data.data);

            } catch (error) {
                console.log(error);
            }
        }
    }, [])
    return (
        <div>Results</div>
    )
}

export default LeaderBoard