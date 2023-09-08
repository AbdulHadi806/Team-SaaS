import { faCircleXmark, faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { ToolTip } from './Tooltip';

const ReuseableTable = () => {
  return (
    <>
     <div class="mx-[40px] overflow-x-auto shadow-md sm:rounded-sm mt-[40px]">
          <table class="w-full">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="bg-gray-800 h-[55px] text-[15px] font-bold text-[#fff] text-center">
               
                  return (
                    <th scope="col" class="px-6 capitalize py-3">
                      
                    </th>
                  );
              
              </tr>
            </thead>
            <tbody>
             
    
                  <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700  text-[18px] text-bold  hover:bg-[#edeaea]  text-center">
                    <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                     
                    </td>
                    <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    
                    </td>
                    <td class="px-6 py-4">h</td>
                    <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                 
                      <span className="text-[12px] font-medium">
                      
                      </span>
                    </td>

                    <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white  flex gap-2 justify-center item-center text-center text-[20px]">
                      <button>
                        {" "}
                        <ToolTip content="update">
                          {" "}
                          <FontAwesomeIcon
                            icon={faCog}
                            style={{ color: "#59b5f8" }}
                          />
                        </ToolTip>
                      </button>
                      <button
                        // onClick={(e) => {
                        //   setShowModal(true);
                        //   setId(item._id, index);
                        // }}
                      >
                        {" "}
                        <ToolTip content="setting">
                          {" "}
                          <FontAwesomeIcon
                            icon={faCircleXmark}
                            style={{ color: "#972020" }}
                          />
                        </ToolTip>
                      </button>
                    </td>
                  </tr>
                
            </tbody>
          </table>
          </div>
    </>
  )
}

export default ReuseableTable