import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import {
  useAuth,
} from "./context/AuthContext";

import ProtectedRoute
from "./components/auth/ProtectedRoute";

import Dashboard
from "./pages/Dashboard";

import Tasks
from "./pages/Tasks";

import Analytics
from "./pages/Analytics";

import Chatbot
from "./pages/Chatbot";

import Profile
from "./pages/Profile";

import Login
from "./pages/Login";

import Register
from "./pages/Register";

import SettingsPage from "./pages/Settings";

export default function App() {

  const {
    isAuthenticated,
  } =
    useAuth();

  return (

    <Routes>

      {/* PUBLIC */}

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      {/* PROTECTED */}

      <Route
        path="/"
        element={
          <ProtectedRoute>

            <Dashboard />

          </ProtectedRoute>
        }
      />

      <Route
        path="/tasks"
        element={
          <ProtectedRoute>

            <Tasks />

          </ProtectedRoute>
        }
      />

      <Route
        path="/analytics"
        element={
          <ProtectedRoute>

            <Analytics />

          </ProtectedRoute>
        }
      />

      <Route
        path="/ai"
        element={
          <ProtectedRoute>

            <Chatbot />

          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <SettingsPage />
          </ProtectedRoute>
        }
      />

      {/* FALLBACK */}

      <Route
        path="*"
        element={
          <Navigate
            to={
              isAuthenticated
                ? "/"
                : "/login"
            }
          />
        }
      />

    </Routes>

  );

}