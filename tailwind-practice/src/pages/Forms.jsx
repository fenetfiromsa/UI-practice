import Checkbox from "../components/forms/Checkbox";
import Select from "../components/forms/Dropdown";
import Textarea from "../components/forms/Textarea";
import Input from "../components/forms/Input";
import Toggle from "../components/forms/Toggle";
import Button from "../components/buttons/Button";

export default function Forms() {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-3 gap-4 bg-gray-50 min-h-screen">

      <Select
        label="Choose a category"
        options={[
          { label: "Productivity", value: "prod" },
          { label: "AI Tools", value: "ai" },
          { label: "Work", value: "work" },
        ]}
      />

      <Checkbox label="I agree to the conditions" />

      <Textarea label="Write your message" />

      <Input label="Your name" />

      <Toggle label="Enable notifications" />

      <Button>Get started</Button>

    </div>
  );
}
