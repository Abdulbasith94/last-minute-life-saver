import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const AuthContext =
  createContext();

export function AuthProvider({
  children,
}) {

  const [user,
    setUser] =
    useState(null);

  const [loading,
    setLoading] =
    useState(true);

  const [sessionExpiry,
    setSessionExpiry] =
    useState(null);

  // ======================
  // AUTO LOGIN
  // ======================

  useEffect(() => {

    const savedUser =
      localStorage.getItem(
        "capsule_user"
      );

    const expiry =
      localStorage.getItem(
        "capsule_session"
      );

    if (
      savedUser &&
      expiry
    ) {

      const now =
        Date.now();

      if (
        now <
        Number(
          expiry
        )
      ) {

        setUser(
          JSON.parse(
            savedUser
          )
        );

        setSessionExpiry(
          Number(
            expiry
          )
        );

      }

      else {

        localStorage.removeItem(
          "capsule_user"
        );

        localStorage.removeItem(
          "capsule_session"
        );

      }

    }

    setLoading(
      false
    );

  }, []);

  // ======================
  // LOGIN
  // ======================

  function login(
    email,
    password
  ) {

    const users =
      JSON.parse(
        localStorage.getItem(
          "capsule_users"
        ) || "[]"
      );

    const found =
      users.find(
        user =>
          user.email ===
            email &&
          user.password ===
            password
      );

    if (
      !found
    ) {

      return false;

    }

    const expiry =
      Date.now() +
      (
        7 *
        24 *
        60 *
        60 *
        1000
      );

    localStorage.setItem(
      "capsule_user",
      JSON.stringify(
        found
      )
    );

    localStorage.setItem(
      "capsule_session",
      expiry
    );

    setUser(
      found
    );

    setSessionExpiry(
      expiry
    );

    return true;

  }

  // ======================
  // REGISTER
  // ======================

  function register(
    data
  ) {

    const users =
      JSON.parse(
        localStorage.getItem(
          "capsule_users"
        ) || "[]"
      );

    const exists =
      users.find(
        user =>
          user.email ===
          data.email
      );

    if (
      exists
    ) {

      return false;

    }

    users.push(
      data
    );

    localStorage.setItem(
      "capsule_users",
      JSON.stringify(
        users
      )
    );

    const expiry =
      Date.now() +
      (
        7 *
        24 *
        60 *
        60 *
        1000
      );

    localStorage.setItem(
      "capsule_user",
      JSON.stringify(
        data
      )
    );

    localStorage.setItem(
      "capsule_session",
      expiry
    );

    setUser(
      data
    );

    setSessionExpiry(
      expiry
    );

    return true;

  }

  // ======================
  // LOGOUT
  // ======================

  function logout() {

    localStorage.removeItem(
      "capsule_user"
    );

    localStorage.removeItem(
      "capsule_session"
    );

    setUser(
      null
    );

    setSessionExpiry(
      null
    );

  }

  // ======================
  // SESSION LEFT
  // ======================

  function getRemainingTime() {

    if (
      !sessionExpiry
    ) {

      return 0;

    }

    return Math.max(
      0,
      Math.floor(
        (
          sessionExpiry -
          Date.now()
        ) /
        (
          1000 *
          60 *
          60
        )
      )
    );

  }

  return (

    <AuthContext.Provider
      value={{

        user,

        loading,

        login,

        register,

        logout,

        sessionExpiry,

        remainingHours:
          getRemainingTime(),

        isAuthenticated:
          !!user,

      }}
    >

      {children}

    </AuthContext.Provider>

  );

}

export function useAuth() {

  return useContext(
    AuthContext
  );

}