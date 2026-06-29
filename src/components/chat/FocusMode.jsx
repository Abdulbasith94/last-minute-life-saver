import {
  Timer,
  Play,
  Pause,
  RotateCcw,
  Brain,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

export default function FocusMode() {

  const [seconds,
    setSeconds] =
    useState(1500);

  const [running,
    setRunning] =
    useState(false);

  const [session,
    setSession] =
    useState(1);

  useEffect(() => {

    let interval;

    if (
      running &&
      seconds > 0
    ) {

      interval =
        setInterval(
          () => {

            setSeconds(
              prev =>
                prev - 1
            );

          },
          1000
        );

    }

    if (
      seconds === 0
    ) {

      setRunning(
        false
      );

      alert(
        "Focus session completed!"
      );

      setSession(
        prev =>
          prev + 1
      );

      setSeconds(
        1500
      );

    }

    return () =>
      clearInterval(
        interval
      );

  }, [
    running,
    seconds,
  ]);

  function formatTime(
    sec
  ) {

    const mins =
      Math.floor(
        sec / 60
      );

    const secs =
      sec % 60;

    return `${mins
      .toString()
      .padStart(
        2,
        "0"
      )}:${secs
      .toString()
      .padStart(
        2,
        "0"
      )}`;

  }

  function reset() {

    setRunning(
      false
    );

    setSeconds(
      1500
    );

  }

  return (

    <div
      className="
        mt-8
        bg-slate-900
        rounded-3xl
        p-8
      "
    >

      {/* Header */}

      <div className="flex items-center gap-4">

        <Brain
          className="
            text-purple-400
          "
          size={30}
        />

        <div>

          <h2 className="text-3xl font-bold">

            Focus Mode

          </h2>

          <p className="text-slate-400">

            Capsule AI Pomodoro Engine

          </p>

        </div>

      </div>

      {/* Timer */}

      <div className="text-center mt-10">

        <div
          className="
            text-7xl
            font-bold
            text-purple-400
          "
        >

          {formatTime(
            seconds
          )}

        </div>

        <p className="text-slate-400 mt-4">

          Session {session}

        </p>

      </div>

      {/* Controls */}

      <div
        className="
          flex
          justify-center
          gap-5
          mt-10
        "
      >

        <button
          onClick={() =>
            setRunning(
              !running
            )
          }
          className="
            bg-purple-600
            px-8
            py-4
            rounded-2xl
            flex
            items-center
            gap-3
          "
        >

          {
            running
            ? <Pause />
            : <Play />
          }

          {
            running
            ? "Pause"
            : "Start"
          }

        </button>

        <button
          onClick={
            reset
          }
          className="
            bg-slate-800
            px-8
            py-4
            rounded-2xl
            flex
            items-center
            gap-3
          "
        >

          <RotateCcw />

          Reset

        </button>

      </div>

      {/* Recommendation */}

      <div
        className="
          mt-8
          rounded-2xl
          bg-purple-500/10
          border
          border-purple-500/20
          p-6
        "
      >

        <div className="flex items-center gap-3">

          <Timer
            className="
              text-purple-400
            "
          />

          <h3 className="font-bold">

            Capsule AI Advice

          </h3>

        </div>

        <p className="mt-4 text-slate-300">

          Focus for 25 minutes,
          then take a 5-minute break.
          Repeat four times before
          taking a long break.

        </p>

      </div>

    </div>

  );

}