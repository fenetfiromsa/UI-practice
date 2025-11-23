import { useState } from "react";

export default function Toggle({ label }) {
  const [on, setOn] = useState(false);

  return (
    <div className="flex items-center gap-3 m-4">
      {label && <span className="text-gray-700">{label}</span>}

      <div
        onClick={() => setOn(!on)}
        className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-all duration-300
        ${on ? "bg-indigo-600" : "bg-gray-300"}`}
      >
        <div
          className={`h-4 w-4 bg-white rounded-full shadow-md transform transition-transform duration-300
          ${on ? "translate-x-6" : "translate-x-0"}`}
        ></div>
      </div>
    </div>
  );
}
