import { useState } from "react";

import { useNavigate }
from "react-router-dom";

import {
  useAuth,
}
from "../context/AuthContext";

export default function Login() {

  const navigate =
    useNavigate();

  const {
    login,
  } =
    useAuth();

  const [email,
    setEmail] =
    useState("");

  const [password,
    setPassword] =
    useState("");

  const [error,
    setError] =
    useState("");

  function handleLogin() {

    const success =
      login(
        email,
        password
      );

    if (!success) {

      setError(
        "Invalid credentials"
      );

      return;
    }

    navigate(
      "/"
    );
  }

  return (

    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-slate-950
      "
    >

      <div
        className="
          bg-slate-900
          p-10
          rounded-3xl
          w-[420px]
        "
      >

        <h1 className="text-4xl font-bold">

          Login

        </h1>

        <p className="mt-3 text-slate-400">

          Last Minute Life Saver

        </p>

        <input
          placeholder="Email"
          value={email}
          onChange={(e)=>
            setEmail(
              e.target.value
            )
          }
          className="
            w-full
            mt-8
            p-4
            rounded-xl
            bg-slate-800
          "
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>
            setPassword(
              e.target.value
            )
          }
          className="
            w-full
            mt-4
            p-4
            rounded-xl
            bg-slate-800
          "
        />

        {error && (

          <p className="text-red-400 mt-4">

            {error}

          </p>

        )}

        <button
          onClick={
            handleLogin
          }
          className="
            w-full
            mt-6
            p-4
            rounded-xl
            bg-green-600
          "
        >

          Login

        </button>

      </div>

    </div>

  );

}