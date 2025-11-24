import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./DashboardLayout";

import Dashboard from "./Dashboard";
import Settings from "./Settings";
import Notifications from "./Notification";
import Messages from "./Messages ";
import Users from "./Users";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </DashboardLayout>
  );
}
