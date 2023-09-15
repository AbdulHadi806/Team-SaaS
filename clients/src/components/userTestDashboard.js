import React, { useEffect } from 'react'
import { io } from 'socket.io-client';

function UserTestDashboard() {
    const socket = io("http://localhost:8000");

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Socket is running at App");
    });
    socket.on("connect_error", (error) => {
      console.error("Socket connection error:", error);
    });
    socket.on("new_Task_Update", (data) => {
      console.log(data);
    });
    return () => {
      socket.off("todoadded");
    };
  }, []);
  return (
    <div className='flex justify-center py-5'>
      user Login
    </div>
  )
}

export default UserTestDashboard
