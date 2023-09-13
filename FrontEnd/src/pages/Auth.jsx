import React, { useRef, useState } from "react";
import axios from "axios";
import { NavLink,useNavigate } from 'react-router-dom'


const Login = () => {
    
    const [login, setLogin] = useState(false)
    const [sendingReq, setSendingReq] = useState(false);
    const navigate = useNavigate();
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const AuthHandler = async (obj) => {
        try {
            if (login) {
               
                setSendingReq(true);
                const response = await axios.post(`http://localhost:3011/users/login`, obj);
                setSendingReq(false);
                localStorage.setItem('token', JSON.stringify(response.data.token));
                
                navigate('/lobby');
            }
            else {
              
                setSendingReq(true);
                const response = await axios.post(`http://localhost:3011/users/signup`, obj);
                setSendingReq(false);
                setLogin(true);
            }
        } catch (error) {
            console.log(error);
           
            setSendingReq(false);
           
        }
       
    }
    const formSubmitHandler = async (e) => {
        e.preventDefault();
        let SignUpObj = {};
        let LoginObj = {};
        if (!login) SignUpObj = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        if (login) LoginObj = {
            email: emailRef.current.value,
            password: passwordRef.current.value
            
        }
        passwordRef.current.value = emailRef.current.value = "";
        if (!login) nameRef.current.value = "";
        login ? AuthHandler(LoginObj) : AuthHandler(SignUpObj)
    }

    return (
        <div className="mt-[30px] flex flex-col items-center " >
            <p className=" text-6xl my-4 font-varela text-center">Unlock the World of Quizzes</p>
            <div className="  p-7 bg-gradient-to-r from-cyan-600 to-blue-500 ... ">
                <div className=" bg-white p-5 flex flex-col justify-evenly">
                    <form className="  min-h-[400px] flex flex-col justify-evenly md:min-h-[500px] md:min-w-[400px]" action="" onSubmit={formSubmitHandler}>
                        <p className="font-quicksand text-4xl font-bold tracking-[4px]">{login ? 'Login' : 'SignUp'}</p>
                        {!login && <div className="flex flex-col  py-3 ">
                            <label >Name</label>
                            <input ref={nameRef} className="text-center border-b-4 p-2 border-gray-400" type="text" required ></input>
                        </div>}
                        <div className="flex flex-col py-3">
                            <label>Email :</label>
                            <input ref={emailRef} className="text-center border-b-4 p-2 border-gray-400" type="email" required ></input>
                        </div>
                        <div className="flex flex-col py-3">
                            <label >Password</label>
                            <input ref={passwordRef} className=" text-center border-b-4 p-2 border-gray-400" type="password" required ></input>
                        </div>



                        {!sendingReq && <button className="bg-cyan-500 rounded-md hover:bg-blue-600 duration-700 text-white text-2xl p-2 text-center" >{login ? 'login' : 'signUp '}</button>}
                        {sendingReq && <button className="bg-cyan-500 rounded-md hover:bg-blue-600 duration-700 text-white text-2xl p-2 text-center">sending Req</button>}


                    </form>
                    <div className="text-2xl p-2 text-center font-QuickSand " onClick={() => setLogin((state) => !state)}>
                        <button >{login ? 'New User??' : 'Already a member??'}
                            <p>Click Here</p></button>
                    </div>
                </div>
             
            </div>
        </div>


    );
}

export default Login






