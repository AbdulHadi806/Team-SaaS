import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client';
import Header from './Header';

function UserTestDashboard() {
    const socket = io("http://localhost:8000");
    const [profileDropdown, setProfileDropdown] = useState(false);
    const [notifications, setNotifications] = useState([])
    const role = "User";
    useEffect(() => {
        socket.on("connect", () => {
            console.log("Socket is running at App");
        });
        socket.on("connect_error", (error) => {
            console.error("Socket connection error:", error);
        });
        socket.on("new_Task_Update", (data) => {
            console.log(data,"data from userTestDashboard")
            setNotifications([...notifications, data])
            console.log(notifications, "notifications")
        });
        return () => {
            socket.off("new_Task_Update");
        };
    }, [socket]);


    const LogoutAdminHandler = () => {
        console.log("test")
    }
    return (
        <>
        <Header
            role={role}
            setProfileDropdown={setProfileDropdown}
            profileDropdown={profileDropdown}
            LogoutAdminHandler={LogoutAdminHandler}
            notifications = {notifications}
        />
        Test</>
    );
}

export default UserTestDashboard