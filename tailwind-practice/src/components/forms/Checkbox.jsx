import { useState } from "react";

export default function Checkbox({ label }) {
  const [checked, setChecked] = useState(false);

  return (
    <label className="flex items-center gap-3 m-4 cursor-pointer">
      <div
        onClick={() => setChecked(!checked)}
        className={`w-5 h-5 border rounded-md flex items-center justify-center transition-all duration-200
        ${checked ? "bg-indigo-600 border-indigo-600" : "border-gray-400"}`}
      >
        {checked && (
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>

      {label && <span className="text-gray-700">{label}</span>}
    </label>
  );
}
