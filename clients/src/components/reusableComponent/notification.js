import { faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'

function Notification({ notifications, profileDropdown }) {
    return (
        <div className='w-[150px] mx-auto relative'>
            <FontAwesomeIcon icon={faBell} />
            <div>
                <ul className='bg-white py-1 absolute shadow-lg w-[160px] border border-t-0 top-[41px] right-0 rounded-b-lg'>
                    {notifications && notifications.map((item) => {
                        return (
                            <>
                                {/* {profileDropdown ? <span className='block'>{item.message}</span> : null} */}
                                <li className='border-t py-[5px] px-1 hover:text-[#660079] font-medium'>

                                    <span>{item.message}</span>
                                </li>

                            </>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Notification
