import React from 'react';
import { FiCompass, FiHeart, FiHome, FiMessageSquare, FiSearch, FiUser } from 'react-icons/fi';

const Sidebar = () => {
    return (
        <div>
            <div className="hidden lg:block w-60 bg-white shadow-lg h-screen p-4 fixed">
      <ul className="space-y-4">
        <li className="flex items-center space-x-4 text-black">
          <FiHome />
          <span className='text-black'>Home</span>
        </li>
        <li className="flex items-center space-x-4 text-black">
          <FiSearch />
          <span className='text-black'>Search</span>
        </li>
        <li className="flex items-center space-x-4 text-black">
          <FiCompass />
          <span className='text-black'>Explore</span>
        </li>
        <li className="flex items-center space-x-4 text-black">
          <FiMessageSquare />
          <span className='text-black'>Messages</span>
        </li>
        <li className="flex items-center space-x-4 text-black">
          <FiHeart />
          <span className='text-black'>Notifications</span>
        </li>
        <li className="flex items-center space-x-4 text-black">
          <FiUser />
          <span className='text-black'>Profile</span>
        </li>
      </ul>
    </div>
        </div>
    );
};

export default Sidebar;