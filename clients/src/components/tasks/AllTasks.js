function AllTasks(props) {
  const { taskRoles, updateTaskHandler } = props;

  return (
    <>
      <h2 className=" text-[30px] font-bold text-[#3E1D47] ps-[40px] pt-[40px] ">
        Task for today
      </h2>
      <div className="flex flex-col w-[45%] ps-[40px] my-[40px] ">
        {taskRoles &&
          taskRoles.getAllTasks.map((item, index) => (
            <div
              className={`w-[100%] rounded-[10px] shadow-2xl border-l-[8px] hover:transition-all ${
                item.status ? "bg-[#000]" : "bg-[#FBFBFB]"
              } ${
                index % 2 === 0 ? "border-[#70367C]" : "border-[#000]"
              } flex justify-between items-center mb-[30px]`}
              key={index}
            >
              <div className="flex flex-col p-[30px]">
                <h3
                  className={`text-[30px] font-bold  ${
                    item.status ? "text-[#fff]" : "text-[#3E1D47]"
                  } capitalize `}
                >
                  {item.assigned_to_role}
                </h3>
                <span
                  className={`inline-block  mt-[20px]  normal-case font-bold  ${
                    item.status ? "text-[#fff]" : "text-[#70367C]"
                  } `}
                >
                  {item.task}
                </span>
              </div>
              <div className="flex items-center mr-4">
                <input
                  id="red-checkbox"
                  type="checkbox"
                  checked={item.status}
                  className="w-5 rounded-[50%] h-5 text-[#000] bg-[#fff] focus:ring-0 dark:bg-0 dark:border-[#000]"
                />
                <button
                  onClick={(e) => {
                    updateTaskHandler(item._id);
                  }}
                >
                  update
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default AllTasks;
