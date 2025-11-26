import { useNavigate,Link } from "react-router-dom";
import { useState,useRef,useContext } from 'react'
import { FcGoogle } from "react-icons/fc";
import { Globalstate } from "../App";


const Signin = () => {

  const val=useContext(Globalstate);
  const {users} = val;
  const navi=useNavigate();

  const userRef=useRef('');
  const passRef=useRef('');
  const[msg,setMsg]=useState('');

  const signin=(e)=>{
      e.preventDefault();

      const userFound=users.find((cur)=>cur.username===userRef.current.value&&cur.password===passRef.current.value);

      if(userFound){
          setMsg('Login Successfully');
          navi('/home')
      }else if('Admin1122'===userRef.current.value&&'Admin@1122'===passRef.current.value){
        setMsg('Admin login Successfully Complete')
        navi('/admin')
      }else{
        setMsg('Invalid username or Password')
      }
    
  };




  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="w-[400px] p-8 rounded-2xl bg-gray-600 shadow-lg">
        <div>
          <h2
            id="signlogo"
            className="flex justify-center font-extrabold text-3xl text-white mb-6"
          >
            Clothico.
          </h2>
        </div>

        <div className="flex flex-col justify-center items-center">
          <form onSubmit={(e)=>signin(e)} className="w-full max-w-sm">
            <div className="mb-4">
              <label
                className="block text-sm mb-1 text-white"
                htmlFor="username"
              >
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                className="w-full bg-transparent border-b-2 border-gray-300 outline-none py-2 px-1 text-white focus:border-white transition-colors"
                placeholder="Enter your username"
                ref={userRef}
              />
            </div>

            <div className="mb-2">
              <label
                className="block text-sm mb-1 text-white"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="w-full bg-transparent border-b-2 border-gray-300 outline-none py-2 px-1 text-white focus:border-white transition-colors"
                placeholder="Enter your password"
                ref={passRef}
              />
            </div>
            {msg && <p className="text-violet-300 mt-4">{msg}</p>}
            <p className="text-sm mb-4 text-right text-gray-200">
              Forget Password?
            </p>

            <button
              type="Sumbit"
              onClick={navi("/home")}
              className="flex justify-center items-center p-2 border-2 border-white rounded-2xl mt-3 w-24 h-10 text-center outline-none text-md font-extrabold text-white hover:bg-gray-400 transition"
            >
              Sign In
            </button>
          </form>
        </div>

        <div className="flex justify-center items-center mt-6 text-white">
          <hr className="flex-grow border-gray-400" />
          <span className="px-2">or</span>
          <hr className="flex-grow border-gray-400" />
        </div>

        <div className="flex flex-col justify-center items-center m-5">
          <p className="text-white text-sm">Signup with Google</p>
          <a
            href="https://myaccount.google.com/?pli=1"
            className="text-2xl m-2 font-extrabold"
          >
            <FcGoogle />
          </a>
          <p className="text-white font-bold text-xl hover:cursor-pointer">
            <Link to="/signup">Create Account {""}</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signin