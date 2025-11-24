import { useRef, useState, useContext } from "react";
import { Globalstate } from "../App";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navi = useNavigate();
  const {users,setUsers} = useContext(Globalstate);
 

  const userRef = useRef("");
  const nameRef = useRef("");
  const emailRef = useRef("");
  const mobileRef = useRef("");
  const passwordRef = useRef("");
  const conpassRef = useRef("");
  const [error, setError] = useState("");

  const Signupsumbit = (e) => {
    e.preventDefault();

    const username = userRef.current.value.trim();
    const name = nameRef.current.value.trim();
    const mobile = mobileRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value.trim();
    const conpass = conpassRef.current.value.trim();

    if (!username || !name || !email || !mobile || !password || !conpass) {
      setError("fill the inputs");
      return;
    }

    const data = {
      username,
      name,
      email,
      mobile,
      password,
    };

    setUsers((cur) => [...cur, data]);
    setError("");
    navi("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="bg-gray-600 w-130 h-140 border-0 rounded-3xl">
        <div className="flex justify-center font-extrabold text-2xl mt-5">
          <h3 id="signlogo">Welcome to Clothico.</h3>
        </div>
        <div className="mt-5">
          <form
            onSubmit={(e)=>Signupsumbit(e)}
            className="flex justify-center items-center flex-col text-start"
          >
            <label
              htmlFor=""
              className="relative right-13 text-white font-bold"
            >
              Username
            </label>
            <input
              type="text"
              ref={userRef}
              className=" border-0 outline-none border-b-1 border-gray-400 bg-transparent text-white mb-3 hover:border-b-blue-300 "
            />
            <label
              htmlFor=""
              className="relative right-16 text-white font-bold"
            >
              Name
            </label>
            <input
              type="text"
              ref={nameRef}
              className="border-0 outline-none border-b-1 border-gray-400 bg-transparent text-white mb-3 hover:border-b-blue-300"
            />
            <label
              htmlFor=""
              className="relative right-16 text-white font-bold"
            >
              E-Mail
            </label>
            <input
              type="text"
              ref={emailRef}
              className="border-0 outline-none border-b-1 border-gray-400  bg-transparent text-white mb-3 hover:border-b-blue-300"
            />
            <label
              htmlFor=""
              className="relative right-15 text-white font-bold"
            >
              Mobile
            </label>
            <input
              type="text"
              ref={mobileRef}
              className="border-0 outline-none border-b-1 border-gray-400  bg-transparent text-white mb-3 hover:border-b-blue-300"
            />
            <label
              htmlFor=""
              className="relative right-14 text-white font-bold"
            >
              Password
            </label>
            <input
              type="text"
              ref={passwordRef}
              className="border-0 outline-none border-b-1 border-gray-400  bg-transparent text-white mb-3 hover:border-b-blue-300"
            />
            <label htmlFor="" className="relative right-5 text-white font-bold">
              Confirm Password
            </label>
            <input
              type="text"
              ref={conpassRef}
              className="border-0 outline-none border-b-1 border-gray-400  bg-transparent text-white mb-3 hover:border-b-blue-300"
            />
            <input type="submit" value="signup" />
          </form>
         
        </div>
      </div>
    </div>
  );
};

export default Signup;
