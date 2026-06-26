export default function AIAlert() {
  return (
    <div className="bg-red-950 border border-red-500 p-6 rounded-xl mt-6">

      <h2 className="text-xl font-bold text-red-400">
        ⚠ AI Warning
      </h2>

      <p className="mt-3">
        DTI Project has an 85% chance of missing
        its deadline.
      </p>

      <p className="mt-2">
        Recommended Action:
        Start within the next 2 hours.
      </p>

    </div>
  );
}