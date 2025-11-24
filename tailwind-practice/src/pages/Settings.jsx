
import { useState, useEffect } from "react";
import Input from "../components/inputs/Input";
import Select from "../components/forms/Dropdown";
import Toggle from "../components/forms/Toggle";
import Checkbox from "../components/forms/Checkbox";
import Button from "../components/buttons/Button";

export default function Settings() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("prod");
  const [notifications, setNotifications] = useState(true);
  const [accepted, setAccepted] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  
  useEffect(() => {
    const saved = localStorage.getItem("settings");
    if (saved) {
      const s = JSON.parse(saved);
      setName(s.name || "");
      setEmail(s.email || "");
      setRole(s.role || "prod");
      setNotifications(s.notifications ?? true);
      setAccepted(!!s.accepted);
    }
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    setMessage("");

    try {
      await new Promise((res) => setTimeout(res, 600));

      localStorage.setItem(
        "settings",
        JSON.stringify({
          name,
          email,
          role,
          notifications,
          accepted,
        })
      );

      setMessage("Settings saved successfully ✅");
    } catch {
      setMessage("Failed to save settings ❌");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="p-8">
     
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Settings</h1>

   
      <div className="bg-white shadow-lg rounded-xl p-8 border max-w-4xl mx-auto">
        <form
          onSubmit={handleSave}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
        >
        
          <Input
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

         
          <div className="col-span-1 sm:col-span-2">
            <Select
              label="Role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              options={[
                { label: "Productivity", value: "prod" },
                { label: "AI Tools", value: "ai" },
                { label: "Work", value: "work" },
              ]}
            />
          </div>

         
          <div className="flex items-center gap-4">
            <Toggle
              label="Notifications"
              on={notifications}
              onToggle={() => setNotifications(!notifications)}
            />
          </div>

          <div className="flex items-center gap-3">
            <Checkbox
              label="I agree to the terms"
              checked={accepted}
              onChange={(v) => setAccepted(v)}
            />
          </div>

         
          <div className="col-span-1 sm:col-span-2 flex justify-end">
            <Button type="submit">
              {saving ? "Saving..." : "Save Settings"}
            </Button>
          </div>
        </form>

       
        {message && (
          <p className="mt-5 text-green-600 font-medium text-sm">{message}</p>
        )}
      </div>
    </div>
  );
}
