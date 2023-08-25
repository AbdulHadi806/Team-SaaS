import React, { useEffect, useState } from "react";
import SignUp from "../components/signup/SignUp";
import Login from "../components/login/Login";
import { useNavigate } from "react-router-dom";
import { useCreateAdminMutation } from "../redux/apiCalls/apiSlice";
import alertify from "alertifyjs";

const SignUpPage = () => {
  const [inputValue, setInput] = useState({
    name: "",
    email: "",
    userName: "",
    password: "",
  });
  const [createAdmin, { error: signUpError }] = useCreateAdminMutation();
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await createAdmin(inputValue);
      if(response.data.status ) {
        alertify.set("notifier", "position", "top-center");
        alertify.success(response.data.message);
      }
      navigate("/");
      setInput("");
    } catch (err) {
      console.log(err);
    }
  };
  const handleChange = (e) => {
    setInput({ ...inputValue, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    if (signUpError) {
      alertify.set("notifier", "position", "top-center");
      alertify.error(signUpError && signUpError.data.message);
    }
  }, [signUpError]);
  return (
    <SignUp
      handleChange={handleChange}
      inputValue={inputValue}
      submitHandler={submitHandler}
    />
  );
};

export default SignUpPage;
