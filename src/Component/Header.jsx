import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { IoMdCart } from "react-icons/io";


const Header = () => {
  return (
  <div className='w-f h-20 bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 flex'>
      <div id='logo' className='w-1/4 text-3xl font-extrabold flex justify-start items-center ps-4'>
        Clothico.
      </div>
      <div className='w-1/2 flex justify-center items-center'>
        <input
          type="text"
          aria-label="Search"
          className='ml-30 w-100 pl-15 h-8 border border-gray-300 rounded-3xl px-4 transition-shadow duration-150 ease-in-out hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:shadow-md'
        />
        <button className='text-2xl'><CiSearch /></button>
      </div>
      <div className='w-1/2  flex justify-end items-center pr-4'>
        <ul className='flex justify-between items-center'>
          <li className='font-medium px-2 hover:underline'><Link to="/home">Home</Link></li>
          <li className='font-medium px-2 hover:underline'><Link to="/about">About</Link></li>
          <li className='font-medium px-2 hover:underline'><Link to="/setting">Settings</Link></li>
          <li className='font-medium px-2 hover:underline'><Link to="/contact">Contact Us</Link></li>
          <li className='font-medium px-2 hover:underline'><Link to="/cart"><IoMdCart /></Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header