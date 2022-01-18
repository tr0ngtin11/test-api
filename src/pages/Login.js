import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosInstance } from '../apis/baseApi';

function Login(props) {

  const history = useHistory();

  const [values, setValues] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async () => {
    try {
      const res = await axiosInstance.post("/Auth/login", values);
      console.log(res);
      window.localStorage.setItem("accessToken", res.data.token)
      history.push("/");
    } catch (err) {

    }
  }



  return (
    <div>
      Login
      <div>
        <input
          type="text"
          name="username"
          onChange={(e) => handleChange(e)}
          className='border-gray-500 border-2 p-2 m-4'
          placeholder='username'
          value={values.username}
        />
        <input
          type="password"
          name="password"
          onChange={(e) => handleChange(e)}
          className='border-gray-500 border-2 p-2 m-4'
          placeholder='password'
          value={values.password}
        />
        <button onClick={() => handleSubmit()}>Login</button>
      </div>

    </div>
  );
}

export default Login;