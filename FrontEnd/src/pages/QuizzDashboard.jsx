import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../containers/globalContext';
import axios from 'axios';
import io from 'socket.io-client';
import { useNavigate } from "react-router-dom";
const QuizzDashboard = () => {
  const navigate = useNavigate();
  const socket = io('https://brainstormebackend.onrender.com');
  const { questions } = useContext(GlobalContext);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [currentMarks, setCurrenMarks] = useState(0);
  const [timer, setTimer] = useState(10);
  const currentQuestion = questions[currentQuestionIndex];
  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };


  const handleSave = async () => {

    try {
      const token = JSON.parse(localStorage.getItem('token'));
      let response = await axios.get(`https://brainstormebackend.onrender.com/quizz/get-correct-answer/${currentQuestion._id}`, { headers: { "Authorization": token } });
      const correct_answer = response.data.data;

      if (currentQuestionIndex < questions.length - 1) {
        if (selectedAnswer && selectedAnswer === correct_answer) {
          setCurrenMarks((prev) => prev + 10);
        }
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null); // Clear selected answer for the next question
        setTimer(10);
      }
      else {
        if (selectedAnswer && selectedAnswer === correct_answer) {
          setCurrenMarks((prev) => prev + 10);
        }
        const token = JSON.parse(localStorage.getItem('token'));
        const roomId = localStorage.getItem('RoomId');
        const finishObj = {
          marks: currentMarks,
          RoomId: roomId
        }

        const resi = await axios.post('https://brainstormebackend.onrender.com/quizz/finish', finishObj, { headers: { "Authorization": token } })

        socket.emit('updateResult', resi.data.data);
        setTimeout(() => {

          navigate('/lobby');
        }, 2000)
      }
    } catch (error) {
      console.log(error);
    }
  };



  useEffect(() => {



    let intervalId;
    if (timer > 0) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      // Timer has reached zero, automatically move to the next question
      handleSave();
    }

    return () => {
      clearInterval(intervalId);
      socket.disconnect();
      // Clear the interval when the component unmounts or when the timer stops
    };
  }, [timer]);


  return questions.length > 0 ? (
    <div className='p-3 flex flex-col gap-10'>
      <div className='flex items-center '>

        <div className=' border-2 p-5 mr-4 text-6xl'>
          <div className='text-2xl'> Score</div>
          <div>
            {currentMarks}/50</div>
        </div>

        <div className=' flex rounded-full mx-auto  h-[200px] w-[200px]  border-4 shadow-lg'>
          <div className='flex-grow   text-7xl rounded-l-full text-center py-14    h-full border-2'>{currentQuestionIndex + 1}</div>
          <div className='flex-grow  text-7xl rounded-r-full text-center py-14    h-full'>5</div>
        </div>

        <div className=' border-2 p-5 mr-4 text-6xl'>
          <div className='text-2xl'> Timer</div>
          <div>
            {timer}
          </div>
        </div>

      </div>


      <div className="border-2 rounded p-3 text-xl ">
        {questions[currentQuestionIndex].question}</div>


      <div className="flex flex-col text-xl w-1/2 gap-3">
        {questions[currentQuestionIndex].options.map((option, index) => (
          <div
            key={index}
            className={`${selectedAnswer === option.text
              ? 'bg-blue-300'
              : 'bg-gray-300'
              } p-4 border-2 rounded-md tracking-wider cursor-pointer `}
            onClick={() => handleAnswerSelection(option.text)}
          >
            {option.text}
          </div>
        ))}
      </div>

      {selectedAnswer && <button onClick={handleSave} className=' bg-blue-600 w-1/2 text-xl p-3 rounded-md text-white tracking-widest active:bg-blue-900'>SAVE</button>}


    </div>
  ) : (
    <div className='text-3xl text-center'>Please Restart the test</div>
  );
};

export default QuizzDashboard;
