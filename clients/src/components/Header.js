import React, { useEffect, useState } from 'react'
import { useGetAdminProfileMutation } from '../redux/apiCalls/apiSlice';
import { AdminToken, LogoutAdminHandler } from '../redux/utils/adminAuth';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
  const [profile, setProfile] = useState("");
  const [getAdminProfile] = useGetAdminProfileMutation();
  const [profileDropdown, setProfileDropdown] = useState(false)

  const token = AdminToken()
  const fetchAdminProfile = async () => {
    try {
      const response = await getAdminProfile(token);
      const adminName = response.data.name;
      setProfile(adminName);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchAdminProfile();
    console.log(profile, "profile")
  }, []);
  return (
    <div className='shadow px-[20px] flex justify-between items-center xl:px-[40px] py-[20px]  bg-white'>
      <h3 className='text-[21px] font-semibold'>Admin</h3>
      <button onMouseLeave={e => {setProfileDropdown(false)}} onMouseOver={e => {setProfileDropdown(true)}} className='relative min-w-[176px] bg-[#f6f5f5] pl-2 pr-3 py-2 rounded'>
        <div className='flex items-center'>
        <div className='w-[50px]'>
          <img src="assets/avatar-1.png" alt="Admin Image" />
        </div>
        <div className='flex gap-1 items-center'>
          <span>{profile}</span>
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
        </div>
        <div className='bg-white py-1 absolute shadow-lg left-0 right-0 rounded-b-lg' style={profileDropdown? {display: "block"}: {display: 'none'}}>
          <ul>
            <li className='px-1 py-[5px] hover:text-[#660079] font-medium'>Profile</li>
            <li className='border-t py-[5px] px-1 hover:text-[#660079] font-medium'>Dashboard</li>
            <li className='border-t py-[5px] px-1 text-[#9b0202] font-medium' onClick={LogoutAdminHandler}>Logout</li>
          </ul>
        </div>
      </button>
    </div>
  )
}

export default Header
