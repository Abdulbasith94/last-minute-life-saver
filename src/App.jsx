import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Analytics from "./pages/Analytics";
import Chatbot from "./pages/Chatbot";
import Profile from "./pages/Profile";

function App() {

  return (

    <Routes>

      <Route

        path="/"

        element={<Dashboard/>}

      />

      <Route

        path="/tasks"

        element={<Tasks/>}

      />

      <Route

        path="/analytics"

        element={<Analytics/>}

      />

      <Route

        path="/chatbot"

        element={<Chatbot/>}

      />

      <Route

        path="/profile"

        element={<Profile/>}

      />

    </Routes>

  );

}

export default App;