import { Link } from "react-router-dom";
import Button from "../ui/Button";

function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-white border-r p-6 space-y-4 ">
      <h1 className="text-xl font-bold text-indigo-600">MyApp</h1>

      <nav className="space-y-2">
        <Link
          to="/dashboard"
          className="block p-3 rounded-lg hover:bg-indigo-50"
        >
          <span>❤️</span> Dashboard
        </Link>

        <Link
          to="/dashboard/users"
          className="block p-3 rounded-lg hover:bg-indigo-50"
        >
          <span>❤️</span> Users
        </Link>

        <Link
          to="/dashboard/settings"
          className="block p-3 rounded-lg hover:bg-indigo-50"
        >
          <span>❤️</span> Settings
        </Link>

        <Link
          to="/dashboard/messages"
          className="block p-3 rounded-lg hover:bg-indigo-50"
        >
          <span>❤️</span> Messages
        </Link>

        <Link
          to="/dashboard/notifications"
          className="block p-3 rounded-lg hover:bg-indigo-50"
        >
          <span>❤️</span> Notifications
        </Link>

        <Button className="ml-11">Log Out</Button>
      </nav>
    </div>
  );
}

export default Sidebar;
