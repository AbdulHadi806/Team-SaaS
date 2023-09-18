import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';

function Notification({ notifications, profileDropdown }) {
    return (
        <div className='mx-auto relative'>
            <FontAwesomeIcon icon={faBell} />
            <div>
                <ul className='bg-white py-1 absolute shadow-lg w-[160px] border border-t-0 top-[41px] right-0 rounded-b-lg'>
                    {profileDropdown ? (
                        notifications.length > 0 ? (
                            notifications.map((item, index) => (
                                <li
                                    key={index}
                                    className='border-t py-[5px] px-1 hover:text-[#660079] font-medium'
                                >
                                    <span>{item.message}</span>
                                </li>
                            ))
                        ) : (
                            <li className='border-t py-[5px] px-1 font-medium'>No task found</li>
                        )
                    ) : null}

                </ul>
            </div>
        </div>
    );
}

export default Notification;
