import React from 'react'

function Header() {
  return (
    <div className='shadow px-[20px] flex justify-between items-center xl:px-[40px] py-[30px]  bg-white'>
      <h3 className='text-[21px] font-semibold'>Admin</h3>
      <div>
        <button className='bg-[#70367C] hover:bg-[#70367C] px-4 py-2 text-white rounded text-[21px] font-semibold'>Logout</button>
      </div>
    </div>
  )
}

export default Header
