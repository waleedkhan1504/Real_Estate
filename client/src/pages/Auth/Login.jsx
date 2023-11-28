import React, { useState } from "react";
import { Button, Form, Input, message } from "antd";
import { LoginUser, RegisterUser } from "../../apiCalls/authCalls";
import { Link, useNavigate } from "react-router-dom";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../../redux/userSlice";
import { useDispatch } from "react-redux";
const Login = () => {
  const navigate = useNavigate();
  //const [values, setValues] = useState([]);
  const dispatch = useDispatch();
  const handleSubmit = async (values) => {
    try {
      dispatch(signInStart());
      const response = await LoginUser({ ...values });
      if (response?.success) {
        message.success(response?.message);
        console.log(response);
        dispatch(signInSuccess(response?.user));

        localStorage.setItem("token", response.token);
        navigate("/");
      } else {
        dispatch(signInFailure(response.message));
        message.error(response?.message);
      }
    } catch (error) {
      message.error(error?.message);
    }
  };

  return (
    <div className="bg-blue-500 mx-auto  max-w-lg">
      <h1 className="text-3xl text-center font-semibold my-7">Login</h1>
      <Form onFinish={handleSubmit} className="flex flex-col p-3 gap-4">
        <Form.Item name="email">
          <Input
            type="email"
            placeholder="email"
            className="border p-3 rounded-lg"
          />
        </Form.Item>
        <Form.Item name="password">
          <Input
            type="password"
            placeholder="password"
            className="border p-3 rounded-lg"
          />
        </Form.Item>
        <button
          type="submit"
          //disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          Login
        </button>
        <Link
          to="/register"
          className="col-span-2 text-center text-gray-600 underline"
        >
          Don't have an account ? register
        </Link>
      </Form>
    </div>
  );
};

export default Login;
