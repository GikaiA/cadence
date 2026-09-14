import React from 'react';

function Login() {
  return (
    <div class="flex justify-center items-center bg-gray-200 px-4 py-2 absolute top-3/6 align-center w-full">
      <div classname ="bg-red">
        <h1 classname="text-2xl">Login blah</h1>
        <input type="text" placeholder="Username" className="border p-2 mb-2 w-full rounded border-black bg-gray-400 " />
        <input type="password" placeholder="Password" className="border p-2 mb-2 w-full rounded border-black  bg-gray-400" />
        <button className="bg-blue-500 text-white p-2">Login</button>
      </div>
    </div>
  )
}

export default Login