// import React, { useEffect, useState } from "react";
// import { useGetAllTasksQuery } from "../../redux/apiCalls/apiSlice";
// import { useLocation } from "react-router-dom";

// function AllTasks() {
//   const [allTasks, setAllTasks] = useState([]);
//   const [isChecked, setIsChecked] = useState(
//     new Array(allTasks.length).fill(false)
//   );

//   const handleCheckboxChange = (index) => {
//     const updatedIsChecked = new Array(allTasks.length).fill(false);
//     updatedIsChecked[index] = !isChecked[index];
//     setIsChecked(updatedIsChecked);
//   };

//   const getAllTasks = useGetAllTasksQuery();

//   const location = useLocation();
//   const getAllTasksHandler = async () => {
//     try {
//       const res = await getAllTasks();
//       setAllTasks(res.data.getAllTasks);
//       console.log("all task", allTasks);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     getAllTasksHandler();
//   }, [location]);

//   return (
//     <>
//       <h2 className=" text-[30px] font-bold text-[#3E1D47] ps-[40px] pt-[40px] ">
//         Task for today
//       </h2>
//       <div className="flex flex-col w-[45%] ps-[40px] my-[40px] ">
//         {allTasks &&
//           allTasks.map((item, index) => (
//             <div
//               className={`w-[100%] rounded-[10px] shadow-2xl border-l-[8px] hover:transition-all ${isChecked[index] ? "bg-[#000]" : "bg-[#FBFBFB]"
//                 } ${index % 2 === 0 ? "border-[#70367C]" : "border-[#000]"
//                 } flex justify-between items-center mb-[30px]`}
//               key={index}
//             >
//               <div className="flex flex-col p-[30px]">
//                 <h3
//                   className={`text-[30px] font-bold  ${isChecked[index] ? "text-[#fff]" : "text-[#3E1D47]"
//                     } capitalize `}
//                 >
//                   {item.assigned_to_role}
//                 </h3>
//                 <span
//                   className={`inline-block  mt-[20px]  capitalize font-bold  ${isChecked[index] ? "text-[#fff]" : "text-[#70367C]"
//                     } `}
//                 >
//                   {item.task}
//                 </span>
//               </div>
//               <div className="flex items-center mr-4">
//                 <input
//                   id="red-checkbox"
//                   type="checkbox"
//                   checked={isChecked[index]}
//                   onChange={(e) => handleCheckboxChange(index)}
//                   className="w-5 rounded-[50%] h-5 text-[#000] bg-[#fff] focus:ring-0 dark:bg-0 dark:border-[#000]"
//                 />
//               </div>
//             </div>
//           ))}
//       </div>
//     </>
//   );
// }

// export default AllTasks;
