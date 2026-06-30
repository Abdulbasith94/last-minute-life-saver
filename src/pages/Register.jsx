import { useState } from "react";

import {
  useNavigate,
} from "react-router-dom";

import {
  useAuth,
} from "../context/AuthContext";

export default function Register() {

  const navigate =
    useNavigate();

  const {
    register,
  } =
    useAuth();

  const [form,
    setForm] =
    useState({

      name: "",
      email: "",
      password: "",

    });

  const [error,
    setError] =
    useState("");

  function handleRegister() {

    const success =
      register(
        form
      );

    if (!success) {

      setError(
        "User already exists"
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

          Register

        </h1>

        <p className="mt-3 text-slate-400">

          Create your account

        </p>

        <input
          placeholder="Name"
          className="
            w-full
            mt-8
            p-4
            rounded-xl
            bg-slate-800
          "
          onChange={(e)=>
            setForm({
              ...form,
              name:
                e.target.value,
            })
          }
        />

        <input
          placeholder="Email"
          className="
            w-full
            mt-4
            p-4
            rounded-xl
            bg-slate-800
          "
          onChange={(e)=>
            setForm({
              ...form,
              email:
                e.target.value,
            })
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="
            w-full
            mt-4
            p-4
            rounded-xl
            bg-slate-800
          "
          onChange={(e)=>
            setForm({
              ...form,
              password:
                e.target.value,
            })
          }
        />

        {error && (

          <p className="text-red-400 mt-4">

            {error}

          </p>

        )}

        <button
          onClick={
            handleRegister
          }
          className="
            w-full
            mt-6
            p-4
            rounded-xl
            bg-green-600
          "
        >

          Register

        </button>

      </div>

    </div>

  );

}