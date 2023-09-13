import React from 'react'

const Room = ({ name, playerCount, host, players, status, _id }) => {
    let bgColorClass = '';

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
        default:
            bgColorClass = 'bg-gray-500'; 
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

            <button className='border bg-gray-900 rounded-lg hover:bg-gray-950'>Join</button>
        </div>
    )
}

export default Room