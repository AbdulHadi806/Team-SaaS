import React, { useState } from "react";
import { useLoginAdminMutation } from "../redux/apiCalls/apiSlice";
import Login from "../components/login/Login";
const LoginPages = () => {
  const [inputValue, setInput] = useState({
    userName: "",
    password: "",
  });
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await loginAdmin(inputValue);
      console.log("data saved", inputValue);
      setInput("");
    } catch (err) {
      console.log(err);
    }
  };
  const [loginAdmin] = useLoginAdminMutation();
  const handleChange = (e) => {
    // setInput({ [e.target.name]: e.target.value });
    // console.log("input data", inputValue);
    const { name, value } = e.target;
    setInput((prevInputValue) => ({
      ...prevInputValue,
      [name]: value,
    }));
    console.log("input data", inputValue);
  };
  return (
    <Login
      handleChange={handleChange}
      inputValue={inputValue}
      submitHandler={submitHandler}
    />
  );
};

export default LoginPages;
