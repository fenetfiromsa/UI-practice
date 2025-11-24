import StatCard from "../stats/StatCard";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <StatCard value="1,234" label="Active Users" trend="+4.2%" />
     
      <StatCard value="87" label="New Signups" trend="-1.2%" />
    </div>
  );
}
