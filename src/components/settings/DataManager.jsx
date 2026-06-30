import {
  Download,
  Upload,
} from "lucide-react";

export default function DataManager() {

  function exportData() {

    const data = {

      user:
        JSON.parse(
          localStorage.getItem(
            "capsule_user"
          ) || "null"
        ),

      tasks:
        JSON.parse(
          localStorage.getItem(
            "tasks"
          ) || "[]"
        ),

      settings:
        JSON.parse(
          localStorage.getItem(
            "capsule_settings"
          ) || "{}"
        ),

      users:
        JSON.parse(
          localStorage.getItem(
            "capsule_users"
          ) || "[]"
        ),

      exportedAt:
        new Date().toISOString(),

    };

    const blob =
      new Blob(
        [
          JSON.stringify(
            data,
            null,
            2
          ),
        ],
        {
          type:
            "application/json",
        }
      );

    const url =
      URL.createObjectURL(
        blob
      );

    const a =
      document.createElement(
        "a"
      );

    a.href =
      url;

    a.download =
      "capsule-backup.json";

    a.click();

    URL.revokeObjectURL(
      url
    );

  }

  function importData(
    event
  ) {

    const file =
      event.target
        .files?.[0];

    if (!file)
      return;

    const reader =
      new FileReader();

    reader.onload =
      e => {

        try {

          const data =
            JSON.parse(
              e.target
                .result
            );

          if (
            data.user
          ) {

            localStorage.setItem(
              "capsule_user",
              JSON.stringify(
                data.user
              )
            );

          }

          if (
            data.users
          ) {

            localStorage.setItem(
              "capsule_users",
              JSON.stringify(
                data.users
              )
            );

          }

          if (
            data.tasks
          ) {

            localStorage.setItem(
              "tasks",
              JSON.stringify(
                data.tasks
              )
            );

          }

          if (
            data.settings
          ) {

            localStorage.setItem(
              "capsule_settings",
              JSON.stringify(
                data.settings
              )
            );

          }

          alert(
            "Import successful. Refresh page."
          );

        }

        catch {

          alert(
            "Invalid backup file."
          );

        }

      };

    reader.readAsText(
      file
    );

  }

  return (

    <div
      className="
        mt-8
        bg-slate-800
        rounded-2xl
        p-6
      "
    >

      <h2 className="text-xl font-bold">

        Backup & Restore

      </h2>

      <div className="flex gap-5 mt-6">

        <button
          onClick={
            exportData
          }
          className="
            flex
            items-center
            gap-3
            px-6
            py-4
            rounded-xl
            bg-green-600
          "
        >

          <Download />

          Export Data

        </button>

        <label
          className="
            flex
            items-center
            gap-3
            px-6
            py-4
            rounded-xl
            bg-blue-600
            cursor-pointer
          "
        >

          <Upload />

          Import Data

          <input
            type="file"
            hidden
            accept=".json"
            onChange={
              importData
            }
          />

        </label>

      </div>

    </div>

  );

}