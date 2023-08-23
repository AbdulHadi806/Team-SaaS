import React, { useState } from "react";
import SignUp from "../components/signup/SignUp";
import Login from "../components/login/Login";
import { useNavigate } from "react-router-dom";
import { useCreateAdminMutation } from "../redux/apiCalls/apiSlice";

const SignUpPage = () => {
  const [inputValue, setInput] = useState({
    name: "",
    email: "",
    userName: "",
    password: "",
  });
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await createAdmin(inputValue);
      console.log("data saved", inputValue);
      navigate("/");
      setInput("");
    } catch (err) {
      console.log(err);
    }
  };
  const [createAdmin] = useCreateAdminMutation();
  const handleChange = (e) => {
    setInput({ ...inputValue, [e.target.name]: e.target.value });
    console.log("input data", inputValue);
  };
  return (
    <SignUp
      handleChange={handleChange}
      inputValue={inputValue}
      submitHandler={submitHandler}
    />
  );
};

export default SignUpPage;
