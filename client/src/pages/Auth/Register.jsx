import React, { useState } from "react";
import { Button, Form, Input, message } from "antd";
import { RegisterUser } from "../../apiCalls/authCalls";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState([]);
  const handleSubmit = async (values) => {
    try {
      const response = await RegisterUser({ ...values });
      if (response?.success) {
        message.success(response?.message);

        navigate("/login");
      } else {
        throw new Error(response?.message);
      }
    } catch (error) {
      message.error(error);
    }
  };
  const handleChange = () => {};
  return (
    <div className="bg-blue-200 mx-auto  max-w-lg">
      <h1 className="text-3xl text-center text-black mt-3 font-semibold my-7">
        REGISTER <hr />
      </h1>

      <Form onFinish={handleSubmit} className="flex flex-col p-3 gap-4">
        <Form.Item name="name">
          <Input
            type="text"
            placeholder="name"
            className="border p-3 rounded-lg"
          />
        </Form.Item>
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
          Register
        </button>
        <Link
          to="/login"
          className="col-span-2 text-center text-gray-600 underline"
        >
          Already have an account ? Login
        </Link>
      </Form>
    </div>
  );
};

export default Register;
