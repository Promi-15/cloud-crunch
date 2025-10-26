import React from "react";

const Login = () => {
  return (
    <div className="bg-black w-full min-h-screen pt-28 ">
      <div className="w-4xl h-2/3 border-2 border-red-900 shadow-2xl shadow-red-800 px-10 py-28 mx-auto flex flex-row justify-between items-center rounded-md bg-clip-padding backdrop-filter backdrop-blur-[10px] bg-[rgba(130,23,23,0.3)] opacity-80 relative overflow-hidden">
        <div className="text-white  w-2/3" >
          <p className="text-center text-2xl font-bold pb-9">Login</p>
          <div className="flex flex-col gap-5 space-y-9">
            <input type="text" name="" placeholder="username" className="border-b-2 border-white"/>
            <input type="password" placeholder="password" className="border-b-2 border-white" id="" />
            <p className="w-full border-white border-2 p-3 rounded-xl bg-gradient-to-t from-black/15 to-rose-950/95">Login</p>
          </div>
        </div>
        <div className="z-10">
          <p className="text-black text-3xl font-bold">Welcome Back</p>
          <p>Don't have Any Account? <span className="underline">Register</span> </p>
        </div>
        <div className="absolute w-full bg-white h-[450px] rotate-45 skew-6  -right-96 border-4 border-black"></div>
      </div>
      <div className="w-4xl h-2/3 border-2 border-red-900 shadow-2xl shadow-red-800 px-10 py-28 mx-auto flex flex-row justify-between items-center rounded-md bg-clip-padding backdrop-filter backdrop-blur-[10px] bg-[rgba(130,23,23,0.3)] opacity-80 relative overflow-hidden">
        <div className="z-10">
          <p className="text-black text-3xl font-bold">Welcome Back</p>
          <p> Have Any Account? <span className="underline">Login</span> </p>
        </div>
        <div className="text-white  w-2/3 pl-9" >
          <p className="text-center text-2xl font-bold pb-9">Register</p>
          <div className="flex flex-col gap-5 space-y-9">
            <input type="text" name="" placeholder="username" className="border-b-2 border-white"/>
            <input type="password" placeholder="password" className="border-b-2 border-white" id="" />
            <p className="w-full border-white border-2 p-3 rounded-xl bg-gradient-to-t from-black/15 to-rose-950/95">Register</p>
          </div>
        </div>
        
        <div className="absolute w-full bg-white h-[460px]  skew-6   border-4 border-black top-5" style={{ transform: 'rotate(-50deg) ', left:"-470px" }}></div>
      </div>
      
    </div>
  );
};

export default Login;
Login;
