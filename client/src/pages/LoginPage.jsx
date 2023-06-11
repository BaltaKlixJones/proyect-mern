import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {signin , errors: signInErros} = useAuth();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center ">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md ">
        <h1 className="text-2xl font-bold">Login</h1>
        { signInErros.map((error, i) => (
        <div className="bg-red-500 p-2 text-white text-center my-2" key={i}>{error}</div>
      ))}
        <form onSubmit={onSubmit}>
          
          <input
            type="text"
            {...register("email", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="email"
          />
          {errors.email && (
            <p className="text-red-500">El email es requerido</p>
          )}
          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="password"
          />
          {errors.password && (
            <p className="text-red-500">La contraseña es requerida</p>
          )}
          <button type="submit"> Login</button>
        </form>
        <p className="flex gap-x-2 justify-between">Dont have account ? <Link to ="/register" className="text-sky-500"> Sign up</Link> </p>
      </div>
    </div>
  );
};

export default LoginPage;
