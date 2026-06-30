import { useState, useEffect } from "react";

import { useNavigate }
from "react-router-dom";

import {
  useAuth,
} from "../context/AuthContext";

import Layout
from "../components/layout/Layout";

import DataManager
from "../components/settings/DataManager";

import {
  Settings,
  Bell,
  Moon,
  Brain,
  Save,
  LogOut,
  Clock,
} from "lucide-react";

export default function SettingsPage() {

  const navigate =
    useNavigate();

  const {
    logout,
    remainingHours,
  } =
    useAuth();

  const [
    settings,
    setSettings,
  ] =
    useState({

      notifications:
        true,

      darkMode:
        true,

      aiSuggestions:
        true,

      dailyGoal:
        5,

    });

  useEffect(() => {

    const saved =
      localStorage.getItem(
        "capsule_settings"
      );

    if (saved) {

      setSettings(
        JSON.parse(
          saved
        )
      );

    }

  }, []);

  function saveSettings() {

    localStorage.setItem(
      "capsule_settings",
      JSON.stringify(
        settings
      )
    );

    alert(
      "Settings saved successfully."
    );

  }

  function handleLogout() {

    logout();

    navigate(
      "/login"
    );

  }

  return (

    <Layout>

      {/* Header */}

      <div className="flex items-center gap-3 mb-8">

        <Settings
          className="
            text-green-400
          "
        />

        <h1 className="text-4xl font-bold">

          Settings

        </h1>

      </div>

      {/* Settings */}

      <div
        className="
          bg-slate-900
          rounded-3xl
          p-8
          space-y-8
        "
      >

        {/* Notifications */}

        <div className="flex justify-between">

          <div className="flex gap-3">

            <Bell
              className="
                text-blue-400
              "
            />

            <div>

              <h3>

                Notifications

              </h3>

              <p className="text-slate-400">

                Enable reminders

              </p>

            </div>

          </div>

          <input
            type="checkbox"
            checked={
              settings.notifications
            }
            onChange={e =>
              setSettings({

                ...settings,

                notifications:
                  e.target.checked,

              })
            }
          />

        </div>

        {/* Dark */}

        <div className="flex justify-between">

          <div className="flex gap-3">

            <Moon
              className="
                text-purple-400
              "
            />

            <div>

              <h3>

                Dark Mode

              </h3>

            </div>

          </div>

          <input
            type="checkbox"
            checked={
              settings.darkMode
            }
            onChange={e =>
              setSettings({

                ...settings,

                darkMode:
                  e.target.checked,

              })
            }
          />

        </div>

        {/* AI */}

        <div className="flex justify-between">

          <div className="flex gap-3">

            <Brain
              className="
                text-green-400
              "
            />

            <div>

              <h3>

                AI Suggestions

              </h3>

            </div>

          </div>

          <input
            type="checkbox"
            checked={
              settings.aiSuggestions
            }
            onChange={e =>
              setSettings({

                ...settings,

                aiSuggestions:
                  e.target.checked,

              })
            }
          />

        </div>

        {/* Goal */}

        <div>

          <h3>

            Daily Goal

          </h3>

          <input
            type="number"
            value={
              settings.dailyGoal
            }
            onChange={e =>
              setSettings({

                ...settings,

                dailyGoal:
                  Number(
                    e.target.value
                  ),

              })
            }
            className="
              mt-3
              p-3
              bg-slate-800
              rounded-xl
              w-40
            "
          />

        </div>

        {/* Session */}

        <div
          className="
            bg-slate-800
            rounded-2xl
            p-5
          "
        >

          <div className="flex gap-3">

            <Clock
              className="
                text-yellow-400
              "
            />

            <div>

              <h3 className="font-bold">

                Session Status

              </h3>

              <p className="text-slate-400 mt-2">

                Session expires in
                {" "}
                {remainingHours}
                {" "}
                hours

              </p>

            </div>

          </div>

        </div>

        {/* Save */}

        <button
          onClick={
            saveSettings
          }
          className="
            flex
            items-center
            gap-3
            bg-green-600
            px-6
            py-4
            rounded-2xl
          "
        >

          <Save />

          Save Settings

        </button>

        
      </div>

      <DataManager />

      <button
        onClick={
          handleLogout
        }
        className="
          flex
          items-center
          gap-3
          bg-red-600
          px-6
          py-4
          rounded-2xl
        "
      >

        <LogOut />
          Logout
          
      </button>
    </Layout>

  );

}