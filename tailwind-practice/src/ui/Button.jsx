export default function Button({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 rounded-xl font-medium bg-gradient-to-r from-teal-400 to-purple-400 text-white shadow hover:opacity-90 transition ${className}`}
    >
      {children}
    </button>
  );
}
