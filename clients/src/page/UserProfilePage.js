import React, { useEffect, useState } from "react";
import dateFormat from "dateformat";
import { UserToken } from "../redux/utils/adminAuth";
import {
  useGetUserProfileMutation,
  useGetUserByTaskQuery,
  useUpdateUserTaskMutation,
} from "../redux/apiCalls/apiSlice";
import Dashboard from "../components/dashboard/Dashboard";
import AllTasks from "../components/tasks/AllTasks";
function UserProfilePage() {
  const [dateTime, setDateTime] = useState();
  const [day, setDay] = useState("");
  const [userProfile, setUserProfile] = useState();
  const testToken = UserToken();
  const [getUserProfile] = useGetUserProfileMutation();

  const { data: userRole, refetch: getUserByTask } =
    useGetUserByTaskQuery(testToken);
  console.log("userby role", userRole);

  useEffect(() => {
    fetchUserProfile();
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const fetchUserProfile = async () => {
    try {
      const res = await getUserProfile(testToken);
      setUserProfile(res.data.user.userName);
    } catch (error) {
      console.log(error);
    }
  };

  const [updateUserTask] = useUpdateUserTaskMutation();

  const updateTaskHandler = async (id) => {
    try {
      await updateUserTask({ task_id: id, testToken });
    } catch (error) {
      console.log(error);
    }
  };

  const formattedTime = dateFormat(day, "h:MM:ss TT");
  const formattedDateTime = dateFormat(dateTime, "dddd, mmmm dS, yyyy");
  return (
    <>
      <Dashboard
        profile={userProfile}
        formattedTime={formattedTime}
        formattedDateTime={formattedDateTime}
      />
      <AllTasks taskRoles={userRole} updateTaskHandler={updateTaskHandler} />
    </>
  );
}

export default UserProfilePage;
