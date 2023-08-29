import React from "react";

const Tasks = () => {
  return (
    <>
      <div className="w-11/12  p-[40px]">
        <div className="flex justify-between gap-[60px]">
          <div className="w-[45%]">
            <h3 className="text-[23px] font-bold text-[#3E1D47] mb-4">
              Tasks for today
            </h3>
            <div className=" p-[20px] h-[130px] color bg-[#D1D5DB] rounded-lg">
              <div className="flex justify-between">
                <div>
                  <h4 className="text-[18px] font-bold text-[#3E1D47] mb-4">
                    Mobile App
                  </h4>
                  <p className="text-[16px]  text-[#3E1D47] mb-4">
                    Prepare Figma File
                  </p>
                </div>
                <input type="radio" className=" w-[25px]" />
              </div>
            </div>
          </div>

          <div className="w-[45%]">
            <h3 className="text-[23px]  font-bold text-[#3E1D47] mb-4">
              Statistics
            </h3>
            <div className="flex justify-between">
              <div className="p-[20px] h-[130px] w-[45%] color bg-[#D1D5DB] rounded-lg "></div>
              <div className="p-[20px] h-[130px] w-[45%] color bg-[#D1D5DB] rounded-lg "></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tasks;
